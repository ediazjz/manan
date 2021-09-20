import { useCallback, useContext, useEffect, useState } from "react"

import debounce from 'lodash.debounce'

import { UserContext } from "../lib/context"
import { firestore } from '../lib/firebase'
import { getUserAvatar } from "../lib/avataaars"
import { Logo, SocialLogIn, Input } from '../components'

export const UserAuth = () => {
  const { user } = useContext(UserContext)

  return (
    !user
      ? <UserLogin />
      : <UsernameSelection />
  )
}

const UsernameSelection = () => {
  const { user } = useContext(UserContext)
  
  const [avatar, setAvatar] = useState('')

  const [userInput, setUserInput] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [title, setTitle] = useState("Choose an username")

  useEffect(() => {
    checkUsername(userInput)

    setAvatar(getUserAvatar(userInput))
  }, [userInput])

  // useCallback is for keeping an instance of the function between re-renderings
  const checkUsername = useCallback(
    debounce(async (username) => {
      // If username is long enough, inspect the database and look for username coincidences
      if (username.length >= 3) {
        const ref = firestore.doc(`/usernames/${username}`)
        const { exists } = await ref.get()

        setIsValid(!exists)
        setIsLoading(false)
      }
    }, 500)
  , [])

  const onChange = (e) => {
    // Force format to user input
    const val = e.target.value.toLowerCase()
    const regex = /^(?=[a-zA-Z0-9._]{3,15}$)/

    if (val.length < 3) {
      setUserInput(val)
      setIsLoading(false)
      setIsValid(false)
    }

    if (regex.test(val)) {
      setUserInput(val)
      setIsLoading(true)
      setIsValid(false)
    }
  }

  const onSubmit = async(e) => {
    e.preventDefault()

    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`)
    const usernameDoc = firestore.doc(`usernames/${userInput}`)

    // Commit both docs together as a batch write
    const batch = firestore.batch()
    batch.set(userDoc, { username: userInput, avatarSeed: userInput, name: user.displayName })
    batch.set(usernameDoc, { uid: user.uid })

    try {
      await batch.commit()
    }
    catch(error) {
      console.log(error)

      setTitle("Something went wrong, please try again")
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-12">
        <img className="w-32 md:w-36 lg:w-40 xl:w-44 mb-2" src={avatar} alt={userInput} />
        <span className="smoll">You can change this avatar later if you want</span>
      </div>


      <form onSubmit={onSubmit} className="flex flex-col items-center w-full md:w-3/4 lg:w-1/2 xl:w-1/3 text-center">
        {title !== "Choose an username" &&
          <p className="smoll text-fdbk-error">
            If the error persits, please wait a few minutes before trying again
          </p>
        }
        <h1 className={`h3 mb-6 ${title !== "Choose an username" && "text-fdbk-error"}`}>{title}</h1>

        <Input
          classContainer="w-full mb-2"
          className="text-center"
          id="username"
          name="username"
          type="text"
          placeholder="cool_username"
          value={userInput}
          onChange={onChange}
        />
        
        {isLoading
          ? <span className="d-block text-inky-lighter">Validating user...</span>
          : isValid
            ? <span className="d-block text-fdbk-success">{userInput} is available!</span>
            : (userInput && !isValid) &&
              <span className="d-block text-fdbk-error">This username is invalid or already taken</span>
        }

        <button type="submit" className={`btn btn-primary w-full mt-4 ${isValid && "shadow-md"}`} disabled={!isValid}>
          I want this one
        </button>
      </form>
    </>
  )
}

const UserLogin = () => {
  return (
    <>
      <Logo className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-8 text-primary" />
      <Logo type="logotype" className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-12 text-primary" />

      <h1 className="h4 w-full md:w-3/4 lg: xl:w-1/3 mb-4 text-center">
        Log in with a social media account
      </h1>
      
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 pb-12">
        <SocialLogIn network="google" className="btn-social" />
        <SocialLogIn network="facebook" className="btn-social" />
        <SocialLogIn network="twitter" className="btn-social" />
      </div>
    </>
  )
}
