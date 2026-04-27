import React, { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Address: 123 Foodie Blvd</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Email: hello@foodieexpress.com</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <div>
          <label>Name: </label>
          <input type="text" required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" required />
        </div>
        <div>
          <label>Message: </label>
          <textarea required />
        </div>
        <button type="submit" disabled={formStatus !== 'idle'}>
          {formStatus === 'idle' ? 'Send Message' : formStatus === 'sending' ? 'Sending...' : 'Sent!'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
