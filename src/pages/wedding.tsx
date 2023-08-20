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
            <video autoPlay muted loop style={{ width: '100vw', height: '100vh', objectPosition: 'center' }}>
              <source src="/video-from-wendy.mp4" />
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
          </div>
        </div>
        {/* <div className="dance-split-media-content">
          <div className="inner">
            <div className="split-content" ref={(el: never) => (textRefs.current[0] = el)}>
              <p>we understand that your wedding day is a once-in-a-lifetime event, and your first dance as a married couple should be nothing short of magical. Our mission is to make that moment unforgettable. Our expert instructors specialize in crafting the perfect first dance for you and your partner. Whether you dream of a graceful waltz, a passionate tango, a lively swing, or a contemporary choreography that reflects your unique style, we&apos;ve got you covered. We take the stress out of learning to dance, ensuring that you step onto the dance floor with confidence and grace. Let us help you create a cherished memory that will last a lifetime – your first dance as newlyweds.</p>
            </div>
            <div className="split-media">
              <Image
                ref={(el: never) => (imageRefs.current[0] = el)}
                src="/wedding1  .jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '90%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div> */}
        {/* <div className="dance-split-media-content">
          <div className="inner">
            <div className="split-media">
              <Image
                ref={(el: never) => (imageRefs.current[1] = el)}
                src="/break-dancing.png"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '90%', objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="split-content right" ref={(el: never) => (textRefs.current[1] = el)}>
              <p>Dancers bring energy and excitement to any event.  Add flare to your meeting, sophistication to your gala, hype to your wedding or bar/bat mitzvah.  If you can dream it we can create it.  The sky&apos;s the limit!</p>
            </div>
          </div>
          <h2 className="heading2">Skydancer Entertainment is your number one source for DANCE entertainment!</h2>
        </div>
            <video autoPlay muted loop>
                <source src="/AudraWedding.mov" />
            </video>
            <blockquote>
              “Wendy was fantastic to work with on our wedding first dance. Not only was she creative with her choreography for a dance that really wowed our guests, but she was also extremely patient with us helping us to nail it on the day of the wedding.”
              <cite>—Audra C.</cite>
            </blockquote>
            <video autoPlay muted loop>
                <source src="/wedding-video.mp4" />
            </video>
      
        <div className="what-we-do">
          <div className="inner">
            <div className="what-we-do-content">
              <h2 className="heading">What We Do</h2>
              <video autoPlay muted loop style={{ width: '100%', height: '400px', objectFit: 'contain' }}>
                <source src="/skydancer-promo2.mp4" />
              </video>
              <h3>At Skydancer Entertainment, we&apos;re all about turning ordinary events into extraordinary experiences. Whether it&apos;s a special celebration, corporate gathering, Flash Mob, Ball Room, Jazz, or any occasion</h3>
              <ul>
                <li>
                  <a href="/wedding">
                  <Image
                    src="/face-to-face-dance.jpg"
                    alt="wedding"
                    width={300}
                    height={200}
                    priority
                  />
                  <p><strong>Wedding first dance</strong></p>
                  </a>
                </li>
                <li>
                  <a href="/corporate">
                    <Image
                      src="/Basheer-big-jump.jpg"
                      alt="Corporate Events"
                      width={300}
                      height={200}
                      priority
                    />
                    <p><strong>Corporate and other Events</strong></p>
                  </a>
                </li>
                <li>
                  <a href="/band">
                    <Image
                      src="/band-dance.png"
                      alt="Corporate Events"
                      width={300}
                      height={200}
                      priority
                    />
                    <p><strong>Choreograph and instruct bands.</strong></p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="what-we-do-content">
              
            </div>
          </div>
        </div> */}
        {/* <div className="testimonials">
          <h2 className="heading">Testimonials</h2>
          <Carousel
            responsive={responsive}
            containerClass="carousel inner"
            infinite
          >
            <div className="quote">
              <blockquote>
                <p>“Wendy was fantastic to work with on our wedding first dance. Not only was she creative with her choreography for a dance that really wowed our guests, but she was also extremely patient with us helping us to nail it on the day of the wedding.”</p>
              </blockquote>
              <cite>—Audra C.</cite>
            </div>
            <div className="quote">
              <blockquote>
                <p>“Working with Skydancer Entertainment has given me the privilege to work as a performer and motivator to help families and their guests celebrate moments they will never forget.”</p>
              </blockquote>
              <cite>—Jamie S.</cite>
            </div>
          </Carousel>
        </div> */}
        {/* <div className="video-break">
          <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/skydancer-promo.mov" />
          </video>
        </div> */}
        
      </main>
      <footer className="footer">
        <div className="inner">
          <p>Copyright &copy; {new Date().getFullYear()} SkydancerEntertainment - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}
