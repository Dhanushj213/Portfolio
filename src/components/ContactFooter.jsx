import { useState } from 'react';
import { supabase } from '../supabaseClient';

const ContactFooter = ({ contactInfo }) => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      if (!supabase) {
        throw new Error('Supabase client is not initialized. Check your environment variables.');
      }

      const { error } = await supabase
        .from('messages')
        .insert([formState]);

      if (error) {
        throw error;
      }

      alert('Message sent successfully!');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or contact me directly via email/phone.');
    } finally {
      setIsSending(false);
    }
  };

  const contactLinks = [
    {
      id: 1,
      icon: 'fa-phone-alt',
      title: 'Phone Number',
      text: '+918217471928',
      link: 'tel:+918217471928',
      isButton: false
    },
    {
      id: 2,
      icon: 'fa-envelope',
      title: 'Email Address',
      text: 'jdhanush213@gmail.com',
      link: 'mailto:jdhanush213@gmail.com',
      isButton: false
    },
    {
      id: 3,
      icon: 'fa-brands fa-instagram',
      title: 'Instagram',
      text: 'Visit Profile',
      link: 'https://www.instagram.com/_dhanush.j_?igsh=MWt3MjMwMWcycjA=',
      isButton: true
    },
    {
      id: 4,
      icon: 'fa-brands fa-whatsapp',
      title: 'Whatsapp',
      text: '+918217471928',
      link: 'https://wa.me/918217471928',
      isButton: false
    },
    {
      id: 5,
      icon: 'fa-brands fa-linkedin-in',
      title: 'LinkedIn',
      text: 'Visit Profile',
      link: 'https://www.linkedin.com/in/dhanush-j-a976ab26b',
      isButton: true
    },
    {
      id: 6,
      icon: 'fa-map-marker-alt',
      title: 'Location',
      text: 'Bengaluru, Karnataka, India',
      link: null,
      isButton: false
    }
  ];

  return (
    <footer id="contact" style={{
      width: '100%',
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'sans-serif',
      paddingTop: '6rem',
      paddingBottom: '6rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Header */}
      <h2 style={{
        fontSize: '3.75rem',
        fontWeight: 'bold',
        marginBottom: '4rem',
        lineHeight: '1',
        textTransform: 'uppercase',
        textAlign: 'center'
      }}>
        CONTACT ME
      </h2>

      {/* Main Container - 50/50 Split */}
      <div className="contact-container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        maxWidth: '1280px',
        width: '100%',
        padding: '0 2rem',
        alignItems: 'start'
      }}>

        {/* LEFT COLUMN: GET IN TOUCH FORM */}
        <div style={{
          backgroundColor: '#121212',
          padding: '3rem',
          borderRadius: '1rem',
          border: '1px solid #222'
        }}>
          <h4 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem' }}>
            Get In Touch
          </h4>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <FormInput label="Name" placeholder="Your Name..." name="name" value={formState.name} onChange={handleChange} />
            <FormInput label="Email" placeholder="example@yourmail.com" name="email" type="email" value={formState.email} onChange={handleChange} />
            <FormInput label="Subject" placeholder="Title..." name="subject" value={formState.subject} onChange={handleChange} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: '#6B7280', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginLeft: '0.25rem' }}>Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Type Here..."
                rows="5"
                style={{ width: '100%', backgroundColor: '#1A1A1A', border: '1px solid #333', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'white', fontSize: '0.875rem', outline: 'none', resize: 'none' }}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              style={{
                width: '100%',
                padding: '1rem 0',
                marginTop: '0.5rem',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '9999px',
                color: isSending ? '#888' : 'white',
                fontWeight: 'bold',
                cursor: isSending ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                opacity: isSending ? 0.7 : 1
              }}
              onMouseOver={(e) => {
                if (!isSending) {
                  e.target.style.background = 'white';
                  e.target.style.color = 'black';
                }
              }}
              onMouseOut={(e) => {
                if (!isSending) {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'white';
                }
              }}
            >
              {isSending ? 'Sending...' : 'Send Now'}
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: CONTACT DETAILS GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns within the right side
          gap: '3rem 2rem',
          alignContent: 'start'
        }}>
          {contactLinks.map((item) => (
            <div key={item.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                fontSize: '1.25rem'
              }}>
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h5 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{item.title}</h5>

              {item.isButton ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    padding: '0.5rem 1.5rem',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '9999px',
                    color: 'white',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => { e.target.style.background = 'white'; e.target.style.color = 'black'; }}
                  onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'white'; }}
                >
                  View Profile
                </a>
              ) : (
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem', fontWeight: '500', margin: 0 }}>
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Copyright */}
      <div style={{
        textAlign: 'center',
        marginTop: '8rem',
        color: '#4B5563',
        fontSize: '1rem',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        fontFamily: 'sans-serif',
        textTransform: 'uppercase'
      }}>
        DHANUSH J
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

const FormInput = ({ label, type = "text", ...props }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <label style={{ color: '#6B7280', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginLeft: '0.25rem' }}>{label}</label>
    <input
      type={type}
      style={{ width: '100%', backgroundColor: '#1A1A1A', border: '1px solid #333', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'white', fontSize: '0.875rem', outline: 'none' }}
      {...props}
    />
  </div>
);

export default ContactFooter;
