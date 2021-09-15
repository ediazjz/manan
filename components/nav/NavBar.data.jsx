import { CogIcon, CollectionIcon, HashtagIcon, UserGroupIcon } from '@heroicons/react/solid'
import { CogIcon as CogIconOtl, CollectionIcon as CollectionIconOtl, HashtagIcon as HashtagIconOtl, UserGroupIcon as UserGroupIconOtl } from '@heroicons/react/outline'
import { MeditateIcon } from '..'

export const menu = [
  {
    iconSolid: <CogIcon />,
    iconOutlined: <CogIconOtl />,
    path: "/settings",
    label: "Settings"
  },
  {
    iconSolid: <CollectionIcon />,
    iconOutlined: <CollectionIconOtl />,
    path: "/log",
    label: "My log"
  },
  {
    iconSolid: <MeditateIcon type="solid" />,
    iconOutlined: <MeditateIcon type="outlined"/>,
    path: "/",
    label: "Meditate"
  },
  {
    iconSolid: <UserGroupIcon />,
    iconOutlined: <UserGroupIconOtl />,
    path: "/social",
    label: "Social"
  },
  {
    iconSolid: <HashtagIcon />,
    iconOutlined: <HashtagIconOtl />,
    path: "/daysOfMeditation",
    label: "100Days"
  }
]
