import type { Meeting } from './types'
import type { Language } from '@/lib/language'
import { COURSE_ORDER } from './course-order'

// Russian meetings
import { meeting01 } from './meetings/meeting-01'
import { meeting02 } from './meetings/meeting-02'
import { meeting03 } from './meetings/meeting-03'
import { meeting04 } from './meetings/meeting-04'
import { meeting05 } from './meetings/meeting-05'
import { meeting06 } from './meetings/meeting-06'
import { meeting07 } from './meetings/meeting-07'
import { meeting08 } from './meetings/meeting-08'
import { meeting09 } from './meetings/meeting-09'
import { meeting10 } from './meetings/meeting-10'
import { meeting11 } from './meetings/meeting-11'
import { meeting12 } from './meetings/meeting-12'
import { meeting13 } from './meetings/meeting-13'
import { meeting14 } from './meetings/meeting-14'

// English meetings
import { meeting01 as meeting01en } from './meetings/en/meeting-01'
import { meeting02 as meeting02en } from './meetings/en/meeting-02'
import { meeting03 as meeting03en } from './meetings/en/meeting-03'
import { meeting04 as meeting04en } from './meetings/en/meeting-04'
import { meeting05 as meeting05en } from './meetings/en/meeting-05'
import { meeting06 as meeting06en } from './meetings/en/meeting-06'
import { meeting07 as meeting07en } from './meetings/en/meeting-07'
import { meeting08 as meeting08en } from './meetings/en/meeting-08'
import { meeting09 as meeting09en } from './meetings/en/meeting-09'
import { meeting10 as meeting10en } from './meetings/en/meeting-10'
import { meeting11 as meeting11en } from './meetings/en/meeting-11'
import { meeting12 as meeting12en } from './meetings/en/meeting-12'
import { meeting13 as meeting13en } from './meetings/en/meeting-13'
import { meeting14 as meeting14en } from './meetings/en/meeting-14'

/**
 * ПОРЯДОК ПРОХОЖДЕНИЯ ≠ КОД УРОКА.
 * Последовательность живёт в COURSE_ORDER (единый источник, см. course-order.ts),
 * здесь только раскладываем встречи по этому порядку — чтобы два списка
 * не разъехались при следующей правке маршрута.
 */
const byIdRu: Record<string, Meeting> = Object.fromEntries(
  [
    meeting01, meeting02, meeting03, meeting04, meeting05, meeting06, meeting07,
    meeting08, meeting09, meeting10, meeting11, meeting12, meeting13, meeting14,
  ].map((m) => [m.id, m])
)

const byIdEn: Record<string, Meeting> = Object.fromEntries(
  [
    meeting01en, meeting02en, meeting03en, meeting04en, meeting05en, meeting06en,
    meeting07en, meeting08en, meeting09en, meeting10en, meeting11en, meeting12en,
    meeting13en, meeting14en,
  ].map((m) => [m.id, m])
)

const meetingsRu: Meeting[] = COURSE_ORDER.map((id) => byIdRu[id]).filter(Boolean)
const meetingsEn: Meeting[] = COURSE_ORDER.map((id) => byIdEn[id]).filter(Boolean)

export function allMeetings(lang: Language = 'ru'): Meeting[] {
  return lang === 'en' ? meetingsEn : meetingsRu
}

export function getMeeting(id: string, lang: Language = 'ru'): Meeting | undefined {
  return allMeetings(lang).find((m) => m.id === id)
}
