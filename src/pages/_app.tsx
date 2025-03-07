import * as React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import Script from 'next/script';
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
  const [open, setOpen] = React.useState(true);
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

        <meta property="og:url" content="https://sky-dancer.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Skydancer Entertainment&trade;"/>
        <meta property="og:description" content="Sharing our passion for dance."/>
        <meta property="og:image" content="/crowd-share.jpeg"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="sky-dancer.vercel.app"/>
        <meta property="twitter:url" content="https://sky-dancer.vercel.app/"/>
        <meta name="twitter:title" content="Skydancer Entertainment&trade;"/>
        <meta name="twitter:description" content="Sharing our passion for dance."/>
        <meta name="twitter:image" content="/crowd-share.jpeg"/>

      </Head>
      <header className={`header ${router.pathname == '/' && 'home'}`}>
        <div>
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
        </div>
        <div>
          <nav className={`${menuStatus ? 'nav-open' : 'nav-closed'}`}>
            <div className="head-logo">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Skydance Entertainment"
                  width={475}
                  height={200}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="header-links">
              <div className="header-links-group">
                <Link href="/" onClick={() => setMenuStatus(false)}>
                  Home
                </Link>
                <Link href="/#about" onClick={() => setMenuStatus(false)}>
                  About
                </Link>
                {/* <Link href="/dance/#testimonials">
                  Testimonials
                </Link> */}
                <Link href="/booking" onClick={() => setMenuStatus(false)}>
                  Book a Dancer
                </Link>
                <Link href="/" onClick={() => setMenuStatus(false)}>
                  Audition
                </Link>
                <Link href="/contact" onClick={() => setMenuStatus(false)}>
                  Contact
                </Link>
              </div>
              <div className="header-links-ext">
                <Link href="https://www.skydancerfitness.com/" className="fitness">
                  <Image
                    src="/fitness.png"
                    alt="SkyDancer Fitness"
                    width={150}
                    height={70}
                  />
                </Link>
                <Link href="https://www.skydanceryoga.com/" className="yoga">
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
        </div>
      </header>
      {/* <div className={`${open ? 'pop-card open': 'pop-card'} `}>
        <button className='pop-card-close' onClick={() => setOpen(false)}>X</button>
        <Image
          src="/pool-ocean.jpg"
          alt="Over looking a pool"
          width={376}
          height={320}
        />
        <p>Escape the hustle and bustle of everyday life and embark on a transformative journey with our rejuvenating yoga retreats.</p>
        <a className="wtrvl-checkout_button button" id="wetravel_button_widget" data-env="https://www.wetravel.com" data-version="v0.3" data-uid="1154190" data-uuid="83061662" href="https://www.wetravel.com/checkout_embed?uuid=83061662" target="_blank">Book Now</a> 
        <Script src="https://cdn.wetravel.com/widgets/embed_checkout.js"></Script>
      </div> */}
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
              <a href="https://www.instagram.com/skydancerentertainment/">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Layer_1" width="800px" height="800px" viewBox="0 0 169.063 169.063" xmlSpace="preserve">
                <g>
                  <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
                  <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
                  <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z"/>
                </g>
                </svg>
              </a>
            </div>
        </div>
      </footer>
    </>
  )
}
