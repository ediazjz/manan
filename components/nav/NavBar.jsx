import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from '..'
import { menu } from './NavBar.data'

export const NavBar = () => {
  const router = useRouter()

  return (
    <nav
      className="
        fixed xl:static bottom-0 z-50
        xl:h-screen w-full xl:w-max
        py-6 md:py-8 xl:py-0 px-6 md:px-8 xl:px-0
        bg-gradient-to-t from-neutral-light via-neutral-light xl:bg-none xl:bg-[#5894BF]
        xl:shadow-x-xl
      "
    >
      <ul
        className="
          flex xl:flex-col items-center xl:items-start justify-between xl:space-y-8
          py-3 xl:py-10 px-6 md:px-16 xl:px-10
          rounded-2xl xl:rounded-none
          bg-[#5894BF]
          shadow-md xl:shadow-none
        "
      >
        <div className="hidden xl:block">
          <Logo width="76" className="text-neutral-lighter mb-4" />
          <Logo type="logotype" width="160" className="text-neutral-lighter mb-4" />
        </div>

        {menu.map((item, index) => {
          return (
            <li key={index} className="navbar-item">
              <Link href={item.path}>
                <a
                  className={`
                    navbar-icon
                    flex items-center
                    ${router.pathname == item.path ? "active text-primary-darker" : "text-neutral-lighter"}
                    xl:hover:text-primary
                    transition-all duration-300
                  `}
                >
                  {router.pathname == item.path ? item.iconSolid : item.iconOutlined}
                  <span className="h6 hidden xl:block ml-4">{item.label}</span>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
