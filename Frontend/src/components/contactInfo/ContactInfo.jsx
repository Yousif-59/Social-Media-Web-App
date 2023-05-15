import './contactInfo.css';
import React from 'react';

export default function ContactInfo() {
  return (
    <div className='contactInfo'>
      <h2 className='contactInfoTitle'>Contact Us!</h2>
        <div className='contactUsSubtitles'>
        <div class='compliments-container'>
          <div className=  'compliments'>
            <div className='compliments-text'>
              <p>Compliments? Talk to our team! </p>
            </div>
              <form action='mailto:karynremsing@gmail.com' method='post' encType='text/plain'>
                <label htmlFor='name'>Your name:</label>
                  <input type='text' id='name' name='name' required />
                    <br />
                <label htmlFor='email'>Your email:</label>
                 <input type='email' id='email' name='email' required />
                    <br />
                <label htmlFor='message'>Message:</label>
                  <textarea id='message' name='message' required></textarea>
                    <br />
                <input type='submit' value='Send Compliment' />
              </form>
            </div>
          </div>
          <br />
          
            <div class='complaints-container'>
          <div className = 'complaints'>
            <div className='complaints-text'>
              <p>Complaints? Speak with our manager. </p>
            </div>
              <form action='mailto:ted.lehr@txstate.edu' method='post' encType='text/plain'>
                <label htmlFor='name'>Your name:</label>
                  <input type='text' id='name' name='name' required />
                    <br />
                <label htmlFor='email'>Your email:</label>
                  <input type='email' id='email' name='email' required />
                    <br />
                <label htmlFor='message'>Message:</label>
                  <textarea id='message' name='message' required></textarea>
                    <br />
                <input type='submit' value='File Complaint' />
              </form>
            </div>
          </div>
        </div>
          </div>
  );
}
