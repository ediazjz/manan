import { GoogleLoginButton, FacebookLoginButton, TwitterLoginButton } from "react-social-login-buttons"
import { auth, googleAuth, facebookAuth, twitterAuth } from "../../lib/firebase"

export const SocialLogIn = (props) => {
  let provider

  const signInWithProvider = async () => {
    await auth.signInWithPopup(provider)
  }

  switch (props.network) {
    case 'google':
      provider = googleAuth
      return <GoogleLoginButton onClick={signInWithProvider} align="center" />

    case 'facebook':
      provider = facebookAuth
      return <FacebookLoginButton onClick={signInWithProvider} align="center" />

    case 'twitter':
      provider = twitterAuth
      return <TwitterLoginButton onClick={signInWithProvider} align="center" />
  
    default:
      console.log("Please, pass a supported network name as props")
  }
}
