import * as React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import '@styles/app.scss';
import { Nanum_Gothic, Poppins } from 'next/font/google';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: '...',
  description: '...',
}

const inter = Nanum_Gothic({ weight: "400", subsets: ['latin'] })
const pop = Poppins({ weight: "200", subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [menuStatus, setMenuStatus] = React.useState(false);
  return (
    <>
      <style jsx global>{`
        html body * {
          font-family: ${pop.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Skydancer Entertainment&trade;</title>
        <meta name="description" content="Sharing our passion for dance."/>

        <meta property="og:url" content="https://sky-dancer.vercel.app/dance"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Skydancer Entertainment&trade;"/>
        <meta property="og:description" content="Sharing our passion for dance."/>
        <meta property="og:image" content="/crowd-share.jpeg"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="sky-dancer.vercel.app"/>
        <meta property="twitter:url" content="https://sky-dancer.vercel.app/dance"/>
        <meta name="twitter:title" content="Skydancer Entertainment&trade;"/>
        <meta name="twitter:description" content="Sharing our passion for dance."/>
        <meta name="twitter:image" content="/crowd-share.jpeg"/>

      </Head>
      <header className={`header ${router.pathname == '/' && 'home'}`}>
      {router.pathname != '/' && <div>
          <div className="menu-button">
            <Link href="/" className="logo">
              <Image
                src="/logo.png"
                alt="Skydance Entertainment"
                width={125}
                height={50}
                priority
              />
            </Link>
            <Image
              src={`${menuStatus ? '/close.svg' : '/menu-svgrepo-com.svg'}`}
              alt='menu Icon'
              onClick={() => setMenuStatus(!menuStatus)}
              width={30}
              height={30}
            />
          </div>
          <nav className={`${menuStatus ? 'nav-open' : 'nav-closed'}`}>
            <div className="head-logo">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Skydance Entertainment"
                  width={280}
                  height={100}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="header-links">
              <div className="header-links-group">
                <Link href="/">
                  Home
                </Link>
                <Link href="/dance/#about">
                  About
                </Link>
                <Link href="/booking">
                  Book a Dancer
                </Link>
                <Link href="/dancer">
                  Audition
                </Link>
                <Link href="/contact">
                  Contact
                </Link>
              </div>
              <div className="header-links-ext">
                <Link href="https://sky-dancer-fitness.vercel.app/" className="fitness">
                  <Image
                    src="/fitness.png"
                    alt="SkyDancer Fitness"
                    width={120}
                    height={60}
                  />
                </Link>
                <Link href="https://sky-dancer-yoga.vercel.app/" className="yoga">
                  <Image
                    src="/yoga-logo.png"
                    alt="SkyDancer Yoga"
                    width={100}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            </nav>
          </div>}
        </header>
      <Component {...pageProps} />
    </>
  )
}
