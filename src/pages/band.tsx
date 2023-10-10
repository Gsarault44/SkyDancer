import { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Urbanist } from 'next/font/google'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] })

export default function Dance() {

  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when at least 50% of the image is visible
    };

    const handleIntersect = (entries: any[], observer: { unobserve: (arg0: any) => void; }) => {
      entries.forEach((entry: { isIntersecting: any; target: { classList: { add: (arg0: string) => void; }; }; }) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); // Add a CSS class for fading in the image
          observer.unobserve(entry.target); // Stop observing once the image is visible
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    imageRefs.current.forEach((imageRef) => {
      if (imageRef) {
        observer.observe(imageRef);
      }
    });

    textRefs.current.forEach((textRef) => {
      if (textRef) {
        observer.observe(textRef);
      }
    });
    

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${urbanist.className} band`}>
        <div className="band-hero">
        <video autoPlay muted loop style={{ width: '100vw', height: '100vh', objectPosition: 'center', objectFit: 'cover' }}>
          <source src="/band-choreo.mp4" />
        </video>
        </div>
        <div className="intro">
          <div className="intro__inner">
            <div className="intro-title" ref={(el: never) => (textRefs.current[0] = el)}>
              <h3>Are you a singer who wants to add some natural movement while singing?  Do you play an instrument but look like a zombie on stage?  Skydancer Entertainment will carefully choreograph a specifically curated movement just for you.  We bring pizazz to bands, singers and musicians!
                </h3>
            </div>
          </div>
          </div>
            <div className="band-grid">
              <Image
                ref={(el: never) => (imageRefs.current[0] = el)}
                src="/band-1.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ maxWidth: '75%', height: ' 100%', maxHeight: '180vh', objectFit: 'cover', objectPosition: 'center', margin: '0 auto' }}
                priority
              />
            </div>
            <h2 className="band-partners">Our Partners</h2>
            <div className='band-partner-wrap'>
              <div className='band-partner'>
                <h3><a href="https://kstreetunion.com/" target='_blank'>K Street Union</a></h3>
                <p>K Street Union is an 8-11 piece super group of industry powerhouses who’ve come together in a line up excelling at genres from Jazz-Lounge to Retro-Pop, Indie to Rock, and Motown to Top 40 Dance Hits.</p>
                <div className="band-video-links">
                  <Link href="https://www.youtube.com/watch?v=vOcFZQns0BI&t=5s"target='_blank'>
                    <img src="https://i3.ytimg.com/vi/vOcFZQns0BI/maxresdefault.jpg" alt="K Street Union" />
                  </Link>
                </div>
              </div>
              <div className='band-partner'>
                <h3><a href="https://dcsynergy.com/" target="_blank">DC Synergy</a></h3>
                <p>If you are planning a party and you need continuous music that is perfect for everyone, DC Synergy may be just the perfect band.</p>
                <div className="band-video-links">
                  <div>
                  <Link href="https://youtu.be/xJHmytqKHF8" target="_blank">
                    <img src="https://i3.ytimg.com/vi/xJHmytqKHF8/maxresdefault.jpg" alt="DC Synergy " />
                  </Link>
                  </div>
                  <div>
                  <Link href="https://www.youtube.com/watch?v=WvYNQT94ick" target="_blank">  
                    <img src="https://i3.ytimg.com/vi/WvYNQT94ick/maxresdefault.jpg" alt="DC Synergy Group"/>
                  </Link>
                  </div>
                  </div>
              </div>
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
