import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@styles/app.scss';
import { Nanum_Gothic } from 'next/font/google'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const inter = Nanum_Gothic({ weight: "400", subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        html * {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <header className={`header ${router.pathname == '/' && 'home'}`}>
      {router.pathname != '/' && <div>
            
            <nav>
              <Link href="/fitness">
                Fitness
              </Link>
              <Link href="/dance">
                Dance
              </Link>
              <Link href="/yoga">
                Yoga
              </Link>
            </nav>
            <div className="head-logo">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Skydance Entertainment"
                  width={250}
                  height={100}
                  priority
                />
              </Link>
            </div>
          </div>}
        </header>
      <Component {...pageProps} />
    </>
  )
}
