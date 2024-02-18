import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const pop = Poppins({ weight: "200", subsets: ['latin'] });

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
      <main className={`${pop.className}`}>
          <p>
            Fitness
          </p>          
      </main>
    </>
  )
}
