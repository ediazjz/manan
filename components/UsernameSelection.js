import { useCallback, useContext, useEffect, useState } from "react"

import debounce from 'lodash.debounce'

import { UserContext } from "../lib/context"
import { firestore } from '../lib/firebase'

export const UsernameSelection = () => {
  const { user, username } = useContext(UserContext)
  const [userInput, setUserInput] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    checkUsername(userInput)
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
    const regex = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/

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
    <main>
      <div className="flex">
        <span className="smoll">You can change this avatar later if you want</span>
      </div>


      <form onSubmit={onSubmit}>
        <h1 className="h3">Choose an username</h1>

        <input
          name="username"
          type="text"
          placeholder="classy_username"
          value={userInput}
          onChange={onChange}
        />
        
        {isLoading
          ? <span className="d-block text-inky-lighter">Validating user...</span>
          : isValid
            ? <span className="d-block text-fdbk-success">This username is available!</span>
            : (userInput && !isValid)
              ? <span className="d-block text-fdbk-error">This username is already taken!</span>
              : <span className="hidden"></span>
        }

        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          I want this one
        </button>
      </form>
    </main>
  )
}
