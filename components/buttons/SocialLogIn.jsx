import { GoogleLoginButton, FacebookLoginButton, TwitterLoginButton } from "react-social-login-buttons"
import { auth, googleAuth, facebookAuth, twitterAuth } from "../../lib/firebase"
import PropTypes from 'prop-types'

export const SocialLogIn = ({ network, className }) => {
  let provider

  const signInWithProvider = async () => {
    await auth.signInWithPopup(provider)
  }

  switch (network) {
    case 'google':
      provider = googleAuth
      return (
        <GoogleLoginButton onClick={signInWithProvider} className={className}>
          <span>Sign in with Google</span>
        </GoogleLoginButton>
      )

    case 'facebook':
      provider = facebookAuth
      return (
        <FacebookLoginButton onClick={signInWithProvider} className={className}>
          <span>Sign in with Facebook</span>
        </FacebookLoginButton>
      )

    case 'twitter':
      provider = twitterAuth
      return (
        <TwitterLoginButton onClick={signInWithProvider} className={className}>
          <span>Sign in with Twitter</span>
        </TwitterLoginButton>
      )
  
    default:
      console.log("Please, pass a supported network name as props")
  }
}

SocialLogIn.propTypes = {
  network: PropTypes.string.isRequired,
  className: PropTypes.string
}
