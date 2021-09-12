import Head from 'next/head'
import { useContext, useState } from 'react'

import { UserContext } from '../lib/context'
import { auth } from '../lib/firebase'
import { Button, Input, InputButton, Logo, Select, SocialLogIn, Textarea, ThemeSwitch, UsernameSelection } from '../components'

import { BeakerIcon } from '@heroicons/react/solid'

export default function Home() {
  const dishes = [
    {
      value: "icecream",
      label: "Helado"
    },
    {
      value: "cake",
      label: "Pastel"
    },
    {
      value: "brownie",
      label: "Brownie"
    }
  ]

  const { user, username } = useContext(UserContext)
  const [client, setClient] = useState({
    nombre: '',
    estadoCivil: '',
    historia: ''
  })

  const handleChange = e => {
    const {name, value} = e.target;
    setClient({
      ...client,
      [name] : value
    });
  };
  
  const handleDropdown = (value) => {
    setClient({
      ...client,
      estadoCivil: value
    })
  }

  return (
    <>
      <Head>
        <title>manan</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ThemeSwitch ></ThemeSwitch>

      <Select className="w-1/2" options={dishes} onChange={handleDropdown} />
      <Input
        classContainer="w-1/2"
        id="nombre"
        label="Write something"
        type="text"
        name="nombre"
        placehoder="This is a test"
        value={client.nombre}
        onChange={handleChange}
      />

      <Textarea
        name="historia"
        placehoder="This is a test"
        value={client.historia}
        onChange={handleChange}
      />
      
      <div className="flex w-1/2">
        <InputButton
          label="This is a test"
          type="radio"
          name="choice"
          value="test"
        />
        <InputButton
          label="This is not a test"
          type="radio"
          name="choice"
          value="not a test"
        />
      </div>

      <Button
        className="btn-primary"
        href="/settings"
        text="This is a test!"
        icon={<BeakerIcon className="btn-icon" />}
      />
      
      {user
        ? !username
          ? <UsernameSelection />
          : <Meditate />
        : <SignInButtons />
      }
    </>
  )
}

const SignInButtons = () => {
  return (
    <main className="container h-screen flex flex-col items-center justify-center">
      <Logo className="text-primary mb-8" />
      <Logo type="logotype" width="256" className="text-primary mb-12" />

      <div className="w-full pb-16">
        <SocialLogIn network="google" className="btn-social" />
        <SocialLogIn network="facebook" className="btn-social" />
        <SocialLogIn network="twitter" className="btn-social" />
      </div>
    </main>
  )
}

const Meditate = () => {
  return (
    <>
      <h1>Meditate</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </>
  )
}
