import { useCallback, useContext, useEffect, useState } from "react"

import debounce from 'lodash.debounce'

import { UserContext } from "../lib/context"
import { firestore } from '../lib/firebase'
import { useUserAvatar } from "../lib/hooks"

export const UsernameSelection = () => {
  const { user, username } = useContext(UserContext)
  const [userInput, setUserInput] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    checkUsername(userInput)

    const avatarSVG = useUserAvatar(userInput)
    setAvatar(avatarSVG)
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

  const onSubmit = async (e) => {
    e.preventDefault()

    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`)
    const usernameDoc = firestore.doc(`usernames/${userInput}`)

    // Commit both docs together as a batch write
    const batch = firestore.batch()
    batch.set(userDoc, { username: userInput, avatarSeed: userInput, name: user.displayName })
    batch.set(usernameDoc, { uid: user.uid })

    await batch.commit()
  }
  
  return (
    <main className="container h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-12">
        <img className="w-32 mb-2" src={avatar} alt={userInput} />
        <span className="smoll">You can change this avatar later if you want</span>
      </div>


      <form onSubmit={onSubmit} className="flex flex-col items-center w-full">
        <h1 className="h3 mb-6 text-center">Choose an username</h1>

        <input
          className="w-full mb-2 text-center"
          name="username"
          type="text"
          placeholder="cool.username"
          value={userInput}
          onChange={onChange}
        />
        
        {isLoading
          ? <span className="d-block text-inky-lighter">Validating user...</span>
          : isValid
            ? <span className="d-block text-fdbk-success">{userInput} is available!</span>
            : (userInput && !isValid)
              ? <span className="d-block text-fdbk-error">This username is invalid or already taken</span>
              : <span className="hiden"></span>
        }

        <button type="submit" className="btn btn-primary mt-4" disabled={!isValid}>
          I want this one
        </button>
      </form>
    </main>
  )
}
