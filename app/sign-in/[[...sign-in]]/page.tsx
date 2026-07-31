import { SignIn } from '@clerk/nextjs'
import { AuthNotConfigured, authEnabled } from '@/components/ui/auth-not-configured'

export default function SignInPage() {
  if (!authEnabled()) return <AuthNotConfigured what="Вход" />

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6 bg-muted/30">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">UXI Entry Course</h1>
        <p className="text-sm text-muted-foreground">
          Войдите, чтобы продолжить обучение и сохранить прогресс
        </p>
      </div>
      <SignIn appearance={{ elements: { rootBox: 'mx-auto' } }} signUpUrl="/sign-up" />
    </div>
  )
}
