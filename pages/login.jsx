import { Logo, SocialLogIn } from '../components'

export default function Login() {
  return (
    <main className="container h-screen flex flex-col items-center justify-center">
      <Logo className="text-primary mb-8" />
      <Logo type="logotype" width="256" className="text-primary mb-12" />

      <div className="w-full pb-16">
        <SocialLogIn network="google" className="btn-social" />
        <SocialLogIn network="facebook" className="btn-social" />
        <SocialLogIn network="twitter" className="btn-social" />
      </div>
    </main>
  )
}
