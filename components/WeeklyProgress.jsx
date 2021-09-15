import { useEffect, useState } from 'react'

import { CheckCircleIcon, MinusCircleIcon, XCircleIcon } from '@heroicons/react/solid'

export const WeeklyProgress = () => {
  const [mounted, setMounted] = useState(false)

  const weekHistory = [
    {
      weekDay: 1,
      didMeditate: true
    },
    {
      weekDay: 2,
      didMeditate: false
    },
    {
      weekDay: 3,
      didMeditate: true
    },
    {
      weekDay: 4,
      didMeditate: undefined
    },
    {
      weekDay: 5,
      didMeditate: undefined
    },
    {
      weekDay: 6,
      didMeditate: undefined
    },
    {
      weekDay: 7,
      didMeditate: undefined
    }
  ]

  // Run this component only the in the browser
  useEffect(() => {
      setMounted(true)
  }, [])

  return mounted && (
    <div className="w-full md:w-max">
      <h2 className="h3">Weekly Progress</h2>

      <div className="flex justify-between md:space-x-2">
        {weekHistory.map((item) => {
          return (
            item.didMeditate === true
              ? <CheckCircleIcon key={item.weekDay} className="w-11 md:w-14 xl:w-16 h-11 md:h-14 xl:h-16 text-fdbk-success" />
              : item.didMeditate === false
                ? <XCircleIcon key={item.weekDay} className="w-11 md:w-14 xl:w-16 h-11 md:h-14 xl:h-16 text-fdbk-error" />
                : <MinusCircleIcon key={item.weekDay} className="w-11 md:w-14 xl:w-16 h-11 md:h-14 xl:h-16 text-inky-lighter" />
          )
        })}
      </div>
    </div>
  )
}
