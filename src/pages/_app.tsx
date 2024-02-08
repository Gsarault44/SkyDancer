import * as React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import '@styles/app.scss';
import { Nanum_Gothic, Poppins } from 'next/font/google';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const inter = Nanum_Gothic({ weight: "400", subsets: ['latin'] })
const pop = Poppins({ weight: "200", subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [menuStatus, setMenuStatus] = React.useState(false);
  return (
    <>
      <style jsx global>{`
        html main * {
          font-family: ${inter.style.fontFamily};
        }
        html body * {
          font-family: ${pop.style.fontFamily};
        }
      `}</style>
      <Head>
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
          content="Skydancer Entertainment"
        />
        <meta
          key="og:description"
          name="og:description"
          content="Sharing our passion for dance."
        />
        <meta property="og:image" content="https://myurl.com/ogImage.png" />
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
                  width={250}
                  height={90}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="header-links">
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
              <Link href="https://sky-dancer-fitness.vercel.app/">
                Fitness
              </Link>
              <Link href="https://sky-dancer-yoga.vercel.app/">
                Yoga
              </Link>
            </div>
            </nav>
          </div>}
        </header>
      <Component {...pageProps} />
    </>
  )
}
