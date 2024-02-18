import { useState, useEffect, useRef, FormEvent } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import 'react-multi-carousel/lib/styles.css';
import emailjs from '@emailjs/browser';

const pop = Poppins({ weight: "200", subsets: ['latin'] });

const isEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const ContactUs = () => {
  const [errors, setErrors] = useState(false);
  const [thanks, setThanks] = useState(false);
  const validateAndSubmitForm = (e: any) => {

 
    if (!isEmail(e)) {
      setErrors(true);
    }
    
    if (isEmail(e)) {
      setErrors(false);
    }
    console.log(errors, e)
  };
  
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input1 = form.current[0] as HTMLInputElement
    const input2 = form.current[1] as HTMLInputElement 
    const input3 = form.current[2] as HTMLInputElement
    if(input1.value.length > 0 && input2.value.length > 0 && input3.value.length > 0) {
      setThanks(true);
      emailjs.sendForm('service_yz0e3ad', 'template_mlghmfv', form.current, 'SgPX_lb0_LriOGFYT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }
      );
    }
  };

  const closeModal = () => {
    form.current.reset();
    setThanks(false)
  }

  return (
    <>
      {thanks && (
        <div className="modal-wrapper">
          <div className="catcher" onClick={closeModal}></div>
          <div className="modal-small">
            <span className="close" onClick={closeModal}>x</span>
            <h2>Thank you!</h2>
            <p>We will be in touch soon</p>
          </div>
        </div>
      )}
      <h3>Or reach out: <Link href="mailto:wendy@skydancerentertainment.com">Wendy@skydancerentertainment.com</Link></h3>
      <form ref={form} onSubmit={e => sendEmail(e)} className='booking-form'>
        <div className="form-flex">
          <div>
            <label className="booking-name-label">Name</label>
            <input
              className="booking-name"
              placeholder='Full Name'
              type="text"
              name="user_name"
              onChange={() => {}}
            />
          </div>
          <div className={errors ? 'error' : 'good'}>
            <label className="booking-email-label">Email</label>
            <input
              className="booking-email"
              placeholder='email@email.com'
              type="email"
              name="user_email"
              onBlur={(e) => validateAndSubmitForm(e.target.value)}
            />
          </div>
        </div>
        <label className="booking-message-label">Let us know what you are looking for.</label>
        <textarea
          className="booking-message"
          placeholder='Im holding an event for...'
          name="message"
          onChange={() => {}}
        />
        <input type="submit" value="Book a Dancer" />
      </form>
    </>
  );
};
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
        <title>SkyDancer Entertainment&trade;</title>
        <meta name="description" content="SkyDancer Entertainment&trade;" />
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
            content="Skydancer Entertainment&trade;"
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
      <main className={`${pop.className} booking`}>
        <div className="dance-hero">
          <video autoPlay muted loop>
            <source src="/gatsby-snippet.mov" />
          </video>
          <h1>Book a Dancer</h1>
        </div>
        <div className="intro">
          <div className="intro__inner">
            <video autoPlay muted loop>
              <source src="/DiscoLightsVidevo.mov" />
            </video>
            <ContactUs />
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
