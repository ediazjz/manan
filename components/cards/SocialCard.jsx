import { useEffect, useState } from 'react'
import Image from 'next/image'

import { HeartIcon, MusicNoteIcon } from '@heroicons/react/solid'

import { Button } from ".."
import { getUserAvatar } from "../../lib/avataaars"

export const SocialCard = () => {
  const [mounted, setMounted] = useState(false)
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    setMounted(true)
    setAvatar(getUserAvatar("ediazjz"))
  }, [])

  return mounted && (
    <div className="max-w-lg py-4 px-4 rounded-xl bg-neutral-lighter shadow hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4 items-center">
          <Image src={avatar} alt="ediazjz" height="48" width="48" layout="intrinsic" />

          <div className="flex flex-col">
            <span className="font-bold">@ediazjz</span>
            <span className="smoll">19 hours ago</span>
          </div>
        </div>

        <span className="h2 text-accent">21 min</span>
      </div>

      <div className="mb-4">
        <span className="d-block mb-1 md:mb-2 font-semibold">Afternoon session</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="flex space-x-4">
        <div className="soundNone btn flex-1 cursor-auto">
          <MusicNoteIcon className="btn-icon" />
          <span>No sounds</span>
        </div>

        <Button
          className="border-[#BB080D] bg-[#BB080D] text-white"
          text="10"
          icon={<HeartIcon className="btn-icon" />}
        />
      </div>
    </div>
  )
}
