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
                  width={450}
                  height={200}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="header-links">
              <div className="header-links-group">
                <Link href="/dance">
                  Home
                </Link>
                <Link href="/dance/#about">
                  About
                </Link>
                {/* <Link href="/dance/#testimonials">
                  Testimonials
                </Link> */}
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
                    width={150}
                    height={70}
                  />
                </Link>
                <Link href="https://sky-dancer-yoga.vercel.app/" className="yoga">
                  <Image
                    src="/yoga-logo.png"
                    alt="SkyDancer Yoga"
                    width={150}
                    height={70}
                  />
                </Link>
              </div>
            </div>
            </nav>
          </div>}
        </header>
      <Component {...pageProps} />
      <footer className="footer">
        <div className="inner">
          <p>Copyright &copy; {new Date().getFullYear()} SkydancerEntertainment - All Rights Reserved.</p>
          <div className="social">
              <a href="https://www.facebook.com/skydancerentertainment/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="https://twitter.com/skydancerent">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 595.3 595.3" xmlSpace="preserve">
                <g>
                  <path d="M341.3,262.5L512,68.1h-40.5L323.3,236.9L204.9,68.1H68.3l179.1,255.2L68.3,527.1h40.5l156.5-178.2l125,178.2h136.6
                    L341.3,262.5z M285.9,325.5l-18.2-25.4L123.3,98h62.2L302,261.2l18.1,25.4l151.5,212.1h-62.2L285.9,325.5z"/>
                </g>
                </svg>
              </a>
            </div>
        </div>
      </footer>
    </>
  )
}
