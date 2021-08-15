import { NavBar } from './'

export const Layout = (props) => {
  return (
    <>
      <NavBar />
      { props.children }
    </>
  )
}
