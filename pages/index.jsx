import Head from 'next/head'
import { useContext, useState } from 'react'

import { UserContext } from '../lib/context'
import { auth } from '../lib/firebase'
import { Button, GroupCheckbox, GroupRadio, Input, Logo, Select, SocialLogIn, Textarea, ThemeSwitch, UsernameSelection } from '../components'
import { useCheckboxes } from '../lib/hooks'

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

  const frameworks = [
    {
      label: "Next",
      value: "next"
    },
    {
      label: "Vue",
      value: "vue"
    },
    {
      label: "Angular",
      value: "angular"
    },
    {
      label: "Svelte",
      value: "svelte"
    },
  ]

  const languages = [
    {
      label: "Python",
      value: "python"
    },
    {
      label: "Ruby",
      value: "ruby"
    },
    {
      label: "Java",
      value: "java"
    },
    {
      label: "Node",
      value: "node"
    },
    {
      label: "C",
      value: "c"
    },
  ]

  const { user, username } = useContext(UserContext)
  const [client, setClient] = useState({
    nombre: '',
    estadoCivil: '',
    historia: '',
    framework: ''
  })

  const [checboxes, setCheckboxes] = useCheckboxes(languages)

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

      <Select
        classContainer="w-1/2"
        label="Select something"
        id="dishes"
        options={dishes}
        onChange={handleDropdown}
      />

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
        classContainer="w-1/2"
        id="historia"
        label="Write something"
        name="historia"
        placehoder="This is a test"
        value={client.historia}
        onChange={handleChange}
      />
      
      <GroupRadio
        classContainer="w-1/2"
        className="w-1/2"
        label="Pick one"
        name="framework"
        options={frameworks}
        onChange={handleChange}
      />

      <GroupCheckbox
        classContainer="w-1/2"
        className="w-1/3"
        label="Pick one"
        name="language"
        options={checboxes}
        onChange={setCheckboxes}
      />

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
