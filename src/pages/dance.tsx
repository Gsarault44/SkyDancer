import { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Urbanist } from 'next/font/google'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] })

export default function Dance() {
  const [showWeddingModal, setShowWeddingModal] = useState(false);
  const [showWeddingModal2, setShowWeddingModal2] = useState(false);

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
      <main className={`${urbanist.className} dance`}>
        <div className="dance-hero">
          <h1>Sharing our passion for dance</h1>
          <Carousel
            responsive={responsive}
            containerClass="carousel"
            autoPlay={true}
            autoPlaySpeed={5000}
            transitionDuration={1500}
            arrows={false}
            infinite={true}
          >
            <Image
              src="/1.jpg"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100vw', height: '100vh' }}
              priority
              loading="eager"
            />
            <Image
              src="/2.jpg"
              alt="Dance"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100vw', height: '100vh' }}
              priority
            />
            <Image
              src="/3.jpg"
              alt="Ballet"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100vw', height: '100vh' }}
              priority
            />
            <video autoPlay muted loop style={{ width: '100vw', height: '100vh', objectPosition: 'center' }}>
              <source src="/4.mov" />
            </video>
            <Image
              src="/45.jpg"
              alt="Ballet"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100vw', height: '100vh', objectPosition: '20%'}}
              priority
            />
            <Image
              src="/5.jpg"
              alt="Ballet"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100vw', height: '100vh' }}
              priority
            />
            <Image
              src="/6.jpg"
              alt="Ballet"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100vw', height: '100vh', objectPosition: 'auto 25%'}}
              priority
            />
            <Image
              src="/65.jpg"
              alt="Ballet"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100vw', height: '100vh' }}
              priority
            />
            <Image
              src="/7.jpg"
              alt="Ballet"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100vw', height: '100vh' }}
              priority
            />
            <Image
              src="/8.jpg"
              alt="Ballet"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100vw', height: '100vh' }}
              priority
            />
            
          </Carousel>
        </div>
        <div className="dance-split-media-content">
          <div className="inner">
            <div className="split-content" ref={(el: never) => (textRefs.current[0] = el)}>
              <h2>Skydancer Entertainment</h2>
              <p>Your preeminent dance casting agency for any event. We are based in Washington DC but cast dancers on any event worldwide. Welcome to your world of dance!</p>
              <Link href="/booking" className="button" >Get in Touch</Link>
            </div>
            <div className="split-media">
              <Image
                ref={(el: never) => (imageRefs.current[0] = el)}
                src="/white-outfits.jpg"
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
        <div className="da-video">
          <video autoPlay muted loop style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
              <source src="/trimmed.mp4" />
          </video>
        </div>
        <div className="dance-split-media-content">
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
              <Link href='/dancer' className="button">Become a Dancer</Link>
            </div>
          </div>
          <h2 className="heading2">Skydancer Entertainment is your number one source for DANCE entertainment!</h2>
        </div>
        {showWeddingModal && <>
          <div className='catcher' onClick={() => setShowWeddingModal(!showWeddingModal)}></div>
          <div className="modal">
            <span className="close" onClick={() => setShowWeddingModal(!showWeddingModal)}>X</span>
            <video autoPlay muted loop>
                <source src="/AudraWedding.mov" />
            </video>
            <blockquote>
              “Wendy was fantastic to work with on our wedding first dance. Not only was she creative with her choreography for a dance that really wowed our guests, but she was also extremely patient with us helping us to nail it on the day of the wedding.”
              <cite>—Audra C.</cite>
            </blockquote>
          </div>
        </>}
        {showWeddingModal2 && <>
          <div className='catcher' onClick={() => setShowWeddingModal2(!showWeddingModal2)}></div>
          <div className="modal">
            <span className="close" onClick={() => setShowWeddingModal2(!showWeddingModal2)}>X</span>
            <video autoPlay muted loop>
                <source src="/wedding-video.mp4" />
            </video>
          </div>
        </>}
        <div className="what-we-do">
          <div className="inner">
            <div className="what-we-do-content">
              <h2 className="heading">What We Do</h2>
              <video autoPlay muted loop style={{ width: '100%', objectFit: 'contain' }}>
                <source src="/skydancer-promo2.mp4" />
              </video>
              <h3>At Skydancer Entertainment, we&apos;re all about turning ordinary events into extraordinary experiences. Whether it&apos;s a special celebration, corporate gathering, Flash Mob, Ball Room, Jazz, or any occasion</h3>
              <ul>
                <li>
                  <Link href="/wedding">
                  <Image
                    src="/face-to-face-dance.jpg"
                    alt="wedding"
                    width={325}
                    height={200}
                    priority
                  />
                  <div className="card-content">
                    <p><strong>Wedding first dance</strong></p>
                    <span>Let us make your first dance memorable.</span>
                  </div>
                  </Link>
                </li>
                <li>
                  <Link href="/corporate">
                    <Image
                      src="/Basheer-big-jump.jpg"
                      alt="Corporate Events"
                      width={325}
                      height={200}
                      priority
                    />
                    <div className="card-content">
                      <p><strong>Corporate and other Events</strong></p>
                      <span>Bar/Bat mitzvah, Charity Galas, Ballroom and many more!</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/band">
                    <Image
                      src="/band-dance.png"
                      alt="Corporate Events"
                      width={325}
                      height={200}
                      priority
                    />
                    <div className="card-content">
                      <p><strong>Choreograph and instruct bands.</strong></p>
                      <span>Synchronize dance with live bands to elevate the moment to an unforgettable experience.</span>
                    </div>
                  </Link>
                </li>
                {/* <li><p><strong>Flash mobs:</strong>  Choreograph and perform flash mobs for any event.</p></li>
                <li><p><strong>Instruct and Perform:</strong>  Choreograph, instruct and perform salsa, ballroom, hip hop, broadway jazz, etc.</p></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="about" id="about">
          <div className="about__inner">
            <h2 className="heading">About</h2>
            <p>Wendy Christensen began her dance career at age six with jazz, tap and ballet.  She went on to compete and place in the top three in several dance competitions both solo and with her high school dance team.  In college she was introduced to ballroom-dance and began competing in DanceSport competitions across the country.  In 2003 she and her partner took first place in Amateur Cabaret at the National Competition, making them National Champions.  Since moving to the DC area she has taken up salsa dance and continues to perform and compete at Salsa Congresses across the country.  Wendy holds a B.S in Exercise Science and is a certified exercise physiologist through the American College of Sports Medicine.  When she isn’t dancing you can find her teaching yoga, training clients or teaching couples their first dance for their wedding!</p>
            <Image
              src="/wendy.png"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '90%', objectFit: 'cover' }}
              priority
            />
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
