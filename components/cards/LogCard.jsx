import { Button } from ".."

import { MusicNoteIcon, PencilIcon } from '@heroicons/react/solid'

export const LogCard = () => {
  return (
    <div className="max-w-lg py-4 px-4 rounded-xl bg-neutral-lighter shadow hover:shadow-lg transition-all duration-300">
      <h2 className="h3">July 21th</h2>

      <div className="flex justify-between items-baseline -mt-3 md:-mt-4 xl:-mt-5 mb-4">
        <span>Afternoon session</span>
        <span className="h2 text-accent">21 min</span>
      </div>

      <div className="flex space-x-4">
        <div className="soundNone btn flex-1 cursor-auto">
          <MusicNoteIcon className="btn-icon" />
          <span>No sounds</span>
        </div>

        <Button
          className="btn-secondary"
          href="/notes"
          text="Notes"
          icon={<PencilIcon className="btn-icon" />}
        />
      </div>
    </div>
  )
}
