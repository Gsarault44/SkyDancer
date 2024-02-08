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
          <meta
            key="og:image"
            name="og:image"
            content="/dance.png"
          />
      </Head>
      <main className={`${urbanist.className} corporate`}>
        <div className="dance-hero">
          <h1>Turning Corporate Events into Masterpieces: Skydancer Entertainment Leads the Way</h1>
          <Image
            src="/headstand-brasheer.jpg"
            alt="headstand"
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: '90%', objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="intro">
          <div className="intro__inner">
            <div className="intro-title" ref={(el: never) => (textRefs.current[0] = el)}>
              <h3>Incorporating dance entertainment into your corporate event can add a dynamic and captivating dimension that engages your audience like never before. Whether it’s a mesmerizing contemporary performance, an elegant ballet, or a high-energy hip-hop routine, dance has the power to transcend language barriers and convey emotions, themes, and messages in a uniquely compelling way. It not only entertains but also inspires, fostering a sense of unity and excitement among attendees. Dance infuses energy into your event, creating unforgettable moments and leaving a lasting impression that will have your guests talking about your corporate gathering for years to come. It’s the perfect way to break the ice, encourage networking, and elevate the overall experience, ensuring your event stands out as a memorable and impactful occasion.</h3>
            </div>
            <div className="intro-image">
              <Image
                ref={(el: never) => (imageRefs.current[0] = el)}
                src="/all-together.jpg"
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
                src="/Basheer1.jpg"
                alt="Wedding Dance"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '20%', height: 'auto', objectFit: 'cover' }}
                priority
              />
              <Image
                src="/Basheer-head-spin.jpg"
                alt="Wedding Dance"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '20%', height: 'auto', objectFit: 'cover' }}
                priority
              />
              <Image
                src="/Basheer-big-jump.jpg"
                alt="Wedding Dance"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '20%', height: 'auto', objectFit: 'cover' }}
                priority
              />
              <Image
                src="/Wendy-clapping.jpg"
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
