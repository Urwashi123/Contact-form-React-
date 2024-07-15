import React, { useState } from 'react';
import "./Contact.css";


const Contact = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    })
  const [issubmmited, setIssubmmited] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIssubmmited(true);
    hideForm();
  }


const hideForm = () => {
  setFormData({
    name: '',
    email: '',
    message: '',
  })
}
  return (
    <section className='Contact'>
      {issubmmited ? (
        <div className='submit'>Form submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Contact form </h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              onChange={handleChange}
              value={formData.name}
              name='name'
              placeholder='Enter your name'
              required />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type="email"
              className="field"
              name='email'
              onChange={handleChange}
              value={formData.email}
              placeholder='Enter your email'
              required />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              name="message"
              className="field mess"
              placeholder='Enter your message'
              onChange={handleChange}
              value={formData.message}
              required>
            </textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  )
}

export default Contact