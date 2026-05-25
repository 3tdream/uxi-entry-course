'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/language'
import { Pause, Play, RotateCcw } from 'lucide-react'

const GRID_SIZE = 20
const STAGE_1_SPEED = 220 // ms — comfortable
const STAGE_2_SPEED = 110 // ms — the "jump" Артём complains about
const STAGE_3_SPEED = 70 // ms — late game
const STAGE_2_THRESHOLD = 50 // points
const STAGE_3_THRESHOLD = 100 // points

type Cell = { x: number; y: number }
type Direction = 'up' | 'down' | 'left' | 'right'

function getStage(score: number): 1 | 2 | 3 {
  if (score >= STAGE_3_THRESHOLD) return 3
  if (score >= STAGE_2_THRESHOLD) return 2
  return 1
}

function getSpeed(score: number): number {
  const stage = getStage(score)
  if (stage === 3) return STAGE_3_SPEED
  if (stage === 2) return STAGE_2_SPEED
  return STAGE_1_SPEED
}

function randomFreeCell(snake: Cell[]): Cell {
  let candidate: Cell
  do {
    candidate = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
  } while (snake.some((c) => c.x === candidate.x && c.y === candidate.y))
  return candidate
}

const INITIAL_SNAKE: Cell[] = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
]

const OPPOSITES: Record<Direction, Direction> = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
}

export function SnakeGame() {
  const { lang } = useLanguage()
  const ui = {
    title: lang === 'en' ? 'Play Snake yourself — feel the pain at 50' : 'Сыграй сам — почувствуй боль на 50 очках',
    subtitle:
      lang === 'en'
        ? 'Use arrow keys or WASD. On mobile — buttons below.'
        : 'Управление: стрелки или WASD. На мобиле — кнопки ниже.',
    score: lang === 'en' ? 'Score' : 'Очки',
    high: lang === 'en' ? 'Best' : 'Рекорд',
    stage: lang === 'en' ? 'Stage' : 'Этап',
    stage1: lang === 'en' ? '🟢 Stage 1 — chill' : '🟢 Этап 1 — спокойно',
    stage2: lang === 'en' ? '⚡ Stage 2 — speed +100%!' : '⚡ Этап 2 — скорость +100%!',
    stage3: lang === 'en' ? '🔥 Stage 3 — survival' : '🔥 Этап 3 — выживание',
    start: lang === 'en' ? 'Start' : 'Старт',
    pause: lang === 'en' ? 'Pause' : 'Пауза',
    reset: lang === 'en' ? 'Reset' : 'Сброс',
    gameOver: lang === 'en' ? 'Game Over' : 'Конец игры',
    youDied: lang === 'en' ? 'You died at score' : 'Умер на счёте',
    youDiedAtStage: lang === 'en' ? 'in stage' : 'на этапе',
    tryAgain: lang === 'en' ? 'Try again' : 'Попробовать снова',
    hint:
      lang === 'en'
        ? 'Tip: most players die at stage 2 — that\'s the focal pain point of this hypothesis.'
        : 'Подсказка: большинство умирает на этапе 2 — это и есть focal pain нашей гипотезы.',
    waiting: lang === 'en' ? 'Press Start or any direction key' : 'Жми Старт или любую стрелку',
  }

  const [snake, setSnake] = useState<Cell[]>(INITIAL_SNAKE)
  const [food, setFood] = useState<Cell>({ x: 5, y: 5 })
  const [direction, setDirection] = useState<Direction>('right')
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [running, setRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const dirRef = useRef<Direction>('right')
  const lastTickDirRef = useRef<Direction>('right')

  // Load high score
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('uxi-snake-hs') : null
    if (stored) setHighScore(parseInt(stored, 10) || 0)
  }, [])

  // Persist high score
  useEffect(() => {
    if (gameOver && score > highScore) {
      setHighScore(score)
      if (typeof window !== 'undefined') {
        localStorage.setItem('uxi-snake-hs', String(score))
      }
    }
  }, [gameOver, score, highScore])

  const changeDir = useCallback((next: Direction) => {
    // can't reverse into yourself within the same tick
    if (OPPOSITES[next] === lastTickDirRef.current) return
    dirRef.current = next
    setDirection(next)
  }, [])

  // Keyboard input
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key === 'arrowup' || key === 'w') {
        e.preventDefault()
        if (!running && !gameOver) setRunning(true)
        changeDir('up')
      } else if (key === 'arrowdown' || key === 's') {
        e.preventDefault()
        if (!running && !gameOver) setRunning(true)
        changeDir('down')
      } else if (key === 'arrowleft' || key === 'a') {
        e.preventDefault()
        if (!running && !gameOver) setRunning(true)
        changeDir('left')
      } else if (key === 'arrowright' || key === 'd') {
        e.preventDefault()
        if (!running && !gameOver) setRunning(true)
        changeDir('right')
      } else if (key === ' ' || key === 'p') {
        e.preventDefault()
        if (!gameOver) setRunning((r) => !r)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [running, gameOver, changeDir])

  // Game tick
  useEffect(() => {
    if (!running || gameOver) return
    const tick = () => {
      setSnake((prev) => {
        const head = prev[0]
        const dir = dirRef.current
        lastTickDirRef.current = dir
        const newHead: Cell = { x: head.x, y: head.y }
        if (dir === 'up') newHead.y -= 1
        if (dir === 'down') newHead.y += 1
        if (dir === 'left') newHead.x -= 1
        if (dir === 'right') newHead.x += 1

        // Wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true)
          setRunning(false)
          return prev
        }
        // Self collision
        if (prev.some((c, i) => i !== prev.length - 1 && c.x === newHead.x && c.y === newHead.y)) {
          setGameOver(true)
          setRunning(false)
          return prev
        }

        const ate = newHead.x === food.x && newHead.y === food.y
        const next = ate ? [newHead, ...prev] : [newHead, ...prev.slice(0, -1)]

        if (ate) {
          setScore((s) => s + 10)
          setFood(randomFreeCell(next))
        }

        return next
      })
    }
    const speed = getSpeed(score)
    const id = window.setInterval(tick, speed)
    return () => window.clearInterval(id)
  }, [running, gameOver, food, score])

  const reset = useCallback(() => {
    setSnake(INITIAL_SNAKE)
    setDirection('right')
    dirRef.current = 'right'
    lastTickDirRef.current = 'right'
    setScore(0)
    setGameOver(false)
    setRunning(false)
    setFood({ x: 5, y: 5 })
  }, [])

  const stage = getStage(score)
  const stageLabel = stage === 3 ? ui.stage3 : stage === 2 ? ui.stage2 : ui.stage1
  const stageColor =
    stage === 3 ? 'text-purple-600 bg-purple-50' : stage === 2 ? 'text-red-600 bg-red-50' : 'text-emerald-600 bg-emerald-50'

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-3 text-center">
        <h3 className="text-lg font-bold">{ui.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{ui.subtitle}</p>
      </div>

      {/* HUD */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="text-sm">
          <span className="text-muted-foreground">{ui.score}: </span>
          <span className="font-mono font-bold tabular-nums">{score}</span>
          <span className="text-muted-foreground ml-3">{ui.high}: </span>
          <span className="font-mono tabular-nums">{highScore}</span>
        </div>
        <div className={`text-xs font-semibold px-2 py-1 rounded-md ${stageColor}`}>{stageLabel}</div>
      </div>

      {/* Grid + overlay */}
      <div className="relative rounded-lg border-2 border-stone-300 bg-stone-50 p-1 select-none">
        <div
          className="grid gap-0 aspect-square"
          style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = i % GRID_SIZE
            const y = Math.floor(i / GRID_SIZE)
            const snakeIdx = snake.findIndex((c) => c.x === x && c.y === y)
            const isFood = food.x === x && food.y === y
            const isHead = snakeIdx === 0
            return (
              <div
                key={i}
                className={
                  isHead
                    ? `w-full aspect-square rounded-sm ${stage === 3 ? 'bg-purple-600' : stage === 2 ? 'bg-red-600' : 'bg-emerald-600'}`
                    : snakeIdx > 0
                      ? `w-full aspect-square rounded-sm ${stage === 3 ? 'bg-purple-400' : stage === 2 ? 'bg-red-400' : 'bg-emerald-400'}`
                      : isFood
                        ? 'w-full aspect-square rounded-full bg-amber-500'
                        : 'w-full aspect-square'
                }
              />
            )
          })}
        </div>

        {/* Overlay: start / game over */}
        {(!running || gameOver) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-900/80 rounded-lg gap-3 px-6 text-center">
            {gameOver ? (
              <>
                <div className="text-3xl font-bold text-white">{ui.gameOver}</div>
                <div className="text-base text-stone-200">
                  {ui.youDied} <span className="font-bold text-amber-400">{score}</span> {ui.youDiedAtStage}{' '}
                  <span className="font-bold text-amber-400">{stage}</span>
                </div>
                <p className="text-xs text-stone-300 max-w-xs">{ui.hint}</p>
                <button
                  onClick={reset}
                  className="mt-1 inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold rounded-md text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  {ui.tryAgain}
                </button>
              </>
            ) : (
              <>
                <p className="text-sm text-stone-300">{ui.waiting}</p>
                <button
                  onClick={() => setRunning(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-md text-sm"
                >
                  <Play className="w-4 h-4" />
                  {ui.start}
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Mobile / touch D-pad + controls */}
      <div className="mt-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            disabled={gameOver}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs border border-stone-300 rounded-md hover:bg-stone-50 disabled:opacity-40"
          >
            {running ? (
              <>
                <Pause className="w-3 h-3" />
                {ui.pause}
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                {ui.start}
              </>
            )}
          </button>
          <button
            onClick={reset}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs border border-stone-300 rounded-md hover:bg-stone-50"
          >
            <RotateCcw className="w-3 h-3" />
            {ui.reset}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1 w-32">
          <div />
          <button
            onTouchStart={(e) => {
              e.preventDefault()
              if (!running && !gameOver) setRunning(true)
              changeDir('up')
            }}
            onClick={() => {
              if (!running && !gameOver) setRunning(true)
              changeDir('up')
            }}
            aria-label="Up"
            className="aspect-square bg-stone-100 hover:bg-stone-200 active:bg-stone-300 rounded text-stone-700 text-xs font-bold"
          >
            ▲
          </button>
          <div />
          <button
            onTouchStart={(e) => {
              e.preventDefault()
              if (!running && !gameOver) setRunning(true)
              changeDir('left')
            }}
            onClick={() => {
              if (!running && !gameOver) setRunning(true)
              changeDir('left')
            }}
            aria-label="Left"
            className="aspect-square bg-stone-100 hover:bg-stone-200 active:bg-stone-300 rounded text-stone-700 text-xs font-bold"
          >
            ◀
          </button>
          <div className="aspect-square" />
          <button
            onTouchStart={(e) => {
              e.preventDefault()
              if (!running && !gameOver) setRunning(true)
              changeDir('right')
            }}
            onClick={() => {
              if (!running && !gameOver) setRunning(true)
              changeDir('right')
            }}
            aria-label="Right"
            className="aspect-square bg-stone-100 hover:bg-stone-200 active:bg-stone-300 rounded text-stone-700 text-xs font-bold"
          >
            ▶
          </button>
          <div />
          <button
            onTouchStart={(e) => {
              e.preventDefault()
              if (!running && !gameOver) setRunning(true)
              changeDir('down')
            }}
            onClick={() => {
              if (!running && !gameOver) setRunning(true)
              changeDir('down')
            }}
            aria-label="Down"
            className="aspect-square bg-stone-100 hover:bg-stone-200 active:bg-stone-300 rounded text-stone-700 text-xs font-bold"
          >
            ▼
          </button>
          <div />
        </div>
      </div>
    </div>
  )
}
