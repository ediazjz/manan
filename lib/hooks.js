import { useEffect, useState } from 'react'

import { auth, firestore } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

// Custom Hook that read auth record in realtime. Returns user and username
export function useUserData() {
  const [user] = useAuthState(auth)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe

    if (user) {
      const ref = firestore.collection('users').doc(user.uid)
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username)
      })
    } else {
      setUsername(null)
    }

    return unsubscribe
  }, [user])

  return { user, username }
}

// Checkbox Hook
export function useCheckboxes(checkboxesList) {
  // Map the passed array of options and use it as the initial state
  const [checkboxes, setCheckboxes] = useState(
    checkboxesList.map(checkbox => ({
      label: checkbox.label,
      value: checkbox.value,
      checked: false,
    }))
  )

  // Create a copy of the state array, update the check status of option clicked and return the new array
  function setCheckbox(index, checked) {
    const newCheckboxes = [...checkboxes]
    newCheckboxes[index].checked = checked
    setCheckboxes(newCheckboxes)
  }

  return [checkboxes, setCheckbox]
}
