import { useEffect, useRef } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google';

import Link from 'next/link';

const pop = Poppins({ weight: "200", subsets: ['latin'] })

export default function Dance() {

  return (
    <>
      <Head>
        <title>SkyDancer Entertainment&trade;</title>
        <meta name="description" content="SkyDancer Entertainment&trade;" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${pop.className} 404`}>
        <div className="missing">
          <h1>Sorry you have danced into the wrong page</h1>
        </div>
      </main>
      <footer className="footer">
        <div className="inner">
          <p>Copyright &copy; {new Date().getFullYear()} SkydancerEntertainment - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}
