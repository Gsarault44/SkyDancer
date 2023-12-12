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


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${urbanist.className} wedding`}>
        <div className="dance-hero">
          <h1>Elevate Your First Dance: Let Us Teach You the Magic!</h1>
            <video autoPlay muted loop>
              <source src="/wedding-trimmed.mp4" />
            </video>
        </div>
        <div className="intro">
          <div className="intro__inner">
            <div className="intro-title" ref={(el: never) => (textRefs.current[0] = el)}>
              <h3>We understand that your wedding day is a once-in-a-lifetime event, and your first dance as a married couple should be nothing short of magical. Our mission is to make that moment unforgettable. Our expert instructors specialize in crafting the perfect first dance for you and your partner. Whether you dream of a graceful waltz, a passionate tango, a lively swing, or a contemporary choreography that reflects your unique style, we&apos;ve got you covered. We take the stress out of learning to dance, ensuring that you step onto the dance floor with confidence and grace. Let us help you create a cherished memory that will last a lifetime – your first dance as newlyweds.</h3>
            </div>
            <div className="intro-image">
              <Image
                ref={(el: never) => (imageRefs.current[0] = el)}
                src="/wedding1.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '90%', objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="wedding-grid">
              <Image
                src="/wedding2.jpg"
                alt="Wedding Dance"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '20%', height: 'auto', objectFit: 'cover' }}
                priority
              />
              <Image
                src="/wedding3.jpg"
                alt="Wedding Dance"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '20%', height: 'auto', objectFit: 'cover' }}
                priority
              />
              <Image
                src="/wedding4.jpg"
                alt="Wedding Dance"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '20%', height: 'auto', objectFit: 'cover' }}
                priority
              />
              <Image
                src="/wedding5.jpg"
                alt="Wedding Dance"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '20%', height: 'auto', objectFit: 'cover' }}
                priority
              />
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
