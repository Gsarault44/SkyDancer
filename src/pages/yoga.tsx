import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Yoga() {
  return (
    <>
      <Head>
        <title>SkyDancer Entertainment&trade;</title>
        <meta name="description" content="SkyDancer Entertainment&trade;" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
            key="description"
            name="description"
            content="Sharing our passion for dance."
          />
          <meta
            key="og:type"
            name="og:type"
            content="website"
          />
          <meta
            key="og:title"
            name="og:title"
            content="Skydancer Entertainment&trade;"
          />
          <meta
            key="og:description"
            name="og:description"
            content="Sharing our passion for dance."
          />
          <meta
            key="og:image"
            name="og:image"
            content="/dance.png"
          />
      </Head>
      <main className={`${inter.className}`}>
          <p>
            yoga
          </p>          
          <Image
            className="logo"
            src="/yoga-logo.png"
            alt="Next.js Logo"
            width={250}
            height={100}
            priority
          />
      </main>
    </>
  )
}
