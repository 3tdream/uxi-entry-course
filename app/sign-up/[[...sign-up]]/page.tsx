import { SignUp } from '@clerk/nextjs'
import { AuthNotConfigured, authEnabled } from '@/components/ui/auth-not-configured'

export default function SignUpPage() {
  if (!authEnabled()) return <AuthNotConfigured what="Регистрация" />

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6 bg-muted/30">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">UXI Entry Course</h1>
        <p className="text-sm text-muted-foreground">
          Регистрация — 14 встреч по UX/UI с квизами и разбором реальных продуктов
        </p>
      </div>
      <SignUp appearance={{ elements: { rootBox: 'mx-auto' } }} signInUrl="/sign-in" />
    </div>
  )
}
