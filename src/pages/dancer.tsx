import { useState, useEffect, useRef, FormEvent } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Urbanist } from 'next/font/google'
import 'react-multi-carousel/lib/styles.css';
import emailjs from '@emailjs/browser';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] })

const isEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const ContactUs = () => {
  const [errors, setErrors] = useState(false);
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
    emailjs.sendForm('service_yz0e3ad', 'template_mlghmfv', form.current, 'SgPX_lb0_LriOGFYT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
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
      <label className="booking-message-label">Tell us your talent! Add a url of what you’ve done or tell us what you can do.</label>
      <textarea
        className="booking-message"
        placeholder='Im holding an event for...'
        name="message"
        onChange={() => {}}
      />
      <input type="submit" value="Become a Dancer" />
    </form>
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
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${urbanist.className} dancer`}>
        <div className="dance-hero">
          <video autoPlay muted loop style={{ width: '100vw', height: '90vh', objectPosition: 'top' }}>
            <source src="/hustle-snippet.mov" />
          </video>
          <h1>Become a Dancer</h1>
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
