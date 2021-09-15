import { useEffect, useState } from 'react'
import Image from 'next/image'

import { getUserAvatar } from "../../lib/avataaars"

export const TweetCard = () => {
  const [mounted, setMounted] = useState(false)
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    setMounted(true)
    setAvatar(getUserAvatar("ediazjz"))
  }, [])

  return mounted &&(
    <div className="max-w-lg py-4 px-4 rounded-xl bg-neutral-lighter shadow hover:shadow-lg transition-all duration-300">
      <div className="flex space-x-4 items-center mb-4">
        <Image src={avatar} alt="ediazjz" height="48" width="48" layout="intrinsic" />

        <div className="flex flex-col">
          <span className="font-bold">@ediazjz</span>
          <span className="smoll">19 hours ago</span>
        </div>
      </div>

      <p>
        Day 50/#100DaysOfMeditation Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
  )
}
