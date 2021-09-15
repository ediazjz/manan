import { createAvatar } from "@dicebear/avatars"
import * as style from '@dicebear/avatars-avataaars-sprites'

export function getUserAvatar(seed) {
  let avatarSVG = createAvatar(style, {
    seed: seed,
    backgroundColor: "#E75A0D",
    radius: 50,
    mouth: [
      "default",
      "eating",
      "grimace",
      "serious",
      "smile",
      "tongue",
      "twinkle"
    ],
    eyes: [
      "default",
      "close",
      "closed",
      "happy",
      "hearts",
      "squint",
      "surprised",
      "wink",
      "winkWacky"
    ],
    eyebrow: [
      "default",
      "defaultNatural",
      "flat",
      "flatNatural",
      "raised",
      "raisedExcited",
      "raisedExcitedNatural",
      "up",
      "upDown",
      "upDownNatural",
    ],
    base64: true
  })

  return avatarSVG
}
