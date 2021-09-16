import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import { DownloadIcon, LoginIcon } from '@heroicons/react/outline'

import { Button, Illustration, Logo } from '../components'

export default function Home() {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#hair1',
      { path: '#hair1' },
      { path: '#hair2' },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
  }, [])

  const downloadApp = () => {
    console.log("hey")
  }

  return (
    <>
      <Head>
        <title>manan:</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js" strategy="beforeInteractive" />

      <main className="container flex flex-col lg:flex-row justify-center items-center h-screen">
        <div className="flex flex-col items-center lg:order-2 lg:w-1/2 mb-12 lg:mb-0">
          <Illustration className="w-3/4 md:w-1/2 lg:w-3/4" />

          <Logo type="logotype" className="w-3/4 md:w-1/2 mt-8 text-primary" />
        </div>

        <div className="flex flex-col lg:order-1 lg:w-1/2">
          <div className="mb-12 text-center">
            <h1 className="h3 mb-2 text-primary">
              Meditate, share it and get motivated
            </h1>

            <p>
              The perfect place to keep track of your meditative practice.
            </p>
          </div>

          <div className="flex flex-col items-center md:w-max md:mx-auto">
            <Button
              className="btn-primary w-full mb-4 shadow-lg"
              href="/login"
              text="Start now"
              icon={<LoginIcon className="btn-icon" />}
            />

            <Button
              className="btn-secondary w-full"
              onClick={downloadApp}
              text="Download App"
              icon={<DownloadIcon className="btn-icon" />}
            />
          </div>
        </div>
      </main>
    </>
  )
}
