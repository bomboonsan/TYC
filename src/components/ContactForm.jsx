import React, { useRef, useState } from 'react';
import axios from 'axios';

const ContactForm = () => {

    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [clientMsg, setClientMsg] = useState('');

    const handleSubmit = () => {
        console.log('emailData', {
            clientName,
            clientEmail,
            clientPhone,
            clientMsg
        });
    }
    const handleSendEmail = async () => {
      const apiUrl = 'https://tyc.bomboonsan.com/send-email';

      const requestBody = {
          clientName,
          clientEmail,
          clientPhone,
          clientMsg
      };

      try {
          const response = await axios.post(apiUrl, requestBody);

          if (response.status === 200) {
              console.log('Email sent successfully!');
          } else {
              console.error('Failed to send email.');
          }
      } catch (error) {
          console.error('Error sending email:', error);
      }
  };

  return (
    <div>
        <form action="" className="contact-form">
            <input 
                type="text" 
                placeholder="ชื่อ-นามสกุล" 
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
            />
            <input 
                type="email" 
                placeholder="อีเมล" 
                value={clientEmail} 
                onChange={(e) => setClientEmail(e.target.value)}
            />
            <input 
                type="tel" 
                placeholder="เบอร์โทรศัพท์ติดต่อ" 
                value={clientPhone} 
                onChange={(e) => setClientPhone(e.target.value)}
            />
            <textarea 
                name="" 
                cols="30" 
                rows="10" 
                placeholder="ข้อความของคุณ" 
                value={clientMsg} 
                onChange={(e) => setClientMsg(e.target.value)}
            >

            </textarea>
            <button type="button" onClick={handleSendEmail}>ส่งข้อมูล</button>
        </form>
    </div>
  );
};

export default ContactForm;