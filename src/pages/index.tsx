import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <div className="splash-row">
          <Link href='https://sky-dancer-fitness.vercel.app/' className='home__link'>
            <h1>Fitness</h1>
            <div className="inline-logo">
              <Image
                src="/skydancer-fitness.png"
                alt="Skydance Fitness"
                width={250}
                height={125}
                priority
              />
            </div>
            <Image
              src="/fitness-back-cropped.jpg"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
              />
          </Link>
          <Link href='/dance' className='home__link'>
            <h1>Entertainment</h1>
            <div className="inline-logo">
              <Image
                src="/logo.png"
                alt="Skydance Entertainment"
                width={250}
                height={125}
                priority
              />
            </div>
            <Image
              src="/dance.png"
              alt="Dancing"
              width={4900}
              height={3200}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
          </Link>
          <Link href='https://sky-dancer-yoga.vercel.app/' className='home__link'>
            <h1>Yoga</h1>
            <div className="inline-logo">
              <Image
                src="/yoga-logo.png"
                alt="Skydance Entertainment"
                width={250}
                height={125}
                priority
              />
            </div>
            <Image
              src="/dancer.png"
              alt="Yoga"
              width={0}
              height={0}
              sizes='100vh'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
          </Link>
        </div>
      </main>
    </>
  )
}
