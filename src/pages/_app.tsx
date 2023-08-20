import * as React from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@styles/app.scss';
import { Nanum_Gothic, Poppins } from 'next/font/google'
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
                  priority
                />
              </Link>
            </div>
              <Link href="https://sky-dancer-fitness.vercel.app/">
                Fitness
              </Link>
              <Link href="https://sky-dancer.vercel.app/">
                Dance
              </Link>
              <Link href="https://sky-dancer-yoga.vercel.app/">
                Yoga
              </Link>
            </nav>
          </div>}
        </header>
      <Component {...pageProps} />
    </>
  )
}
