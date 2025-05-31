import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('hkNKS0EUbuFnA2a5j');

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 8000); // Increased duration to 8 seconds
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    // Log the form data to verify
    const formData = new FormData(form.current);
    console.log('Form data:', Object.fromEntries(formData));

    emailjs.sendForm(
      'service_tnrj47x',
      'template_2urqx2x',
      form.current,
      'hkNKS0EUbuFnA2a5j'
    )
      .then((result) => {
        console.log('SUCCESS!', result);
        setSubmitStatus({ 
          message: 'Message sent successfully! I will get back to you soon.',
          isError: false 
        });
        setShowConfetti(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setSubmitStatus({ 
          message: `Failed to send message: ${error.text}`,
          isError: true 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {showConfetti && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1000,
          pointerEvents: 'none'
        }}>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={300}
            recycle={true}
            colors={['#00FFEE', '#00E6D6', '#00CCBE', '#00B3A6', '#00998E']}
            gravity={0.15}
            tweenDuration={8000}
            wind={0.01}
            opacity={0.9}
          />
        </div>
      )}
      <section className="w-full" id="contact">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <FaEnvelopeOpenText className="text-[#e13a7a] text-4xl mb-2" />
            <h2 className="text-3xl font-extrabold mb-2 text-center text-[#e13a7a]">Contact Me</h2>
            <div className="w-16 h-1 bg-[#e13a7a] rounded-full mb-4"></div>
            <p className="text-gray-500 text-center mb-6">I'd love to hear from you! Fill out the form and I'll get back to you soon.</p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col gap-4"
            >
              <input
                type="text"
                name="to_name"
                defaultValue="Sai"
                hidden
              />
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e13a7a] transition"
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Email Address"
                required
                className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e13a7a] transition"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e13a7a] transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#e13a7a] transition resize-none"
              ></textarea>

              {submitStatus.message && (
                <div
                  className={`text-center text-sm font-medium rounded-lg px-4 py-2 mb-2 ${
                    submitStatus.isError
                      ? 'bg-red-50 text-red-600 border border-red-200'
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full md:w-auto bg-[#e13a7a] hover:bg-[#6d217f] text-white font-bold px-8 py-3 rounded-full shadow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mx-auto mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <i className='bx bx-send'></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 