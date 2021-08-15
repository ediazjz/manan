import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/log">
            <a>
              My log
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <a>
              Settings
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
