import React, { useRef, useState } from 'react';
import nodemailer from 'nodemailer';

export default (props) => {
    const [emailData, setEmailData] = useState({
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        clientMsg: '',
    });
    
    const handleChange = (e) => {
        console.log(e.target.value);
        // setEmailData({ ...emailData, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        console.log(emailData);        
    }
    return (
        <>
        <p>
            {emailData.clientName}
        </p>
        <form action="" className="contact-form">
            <input type="text" placeholder="ชื่อ-นามสกุล" value={emailData.clientName} onChange={handleChange} />
            <input type="email" placeholder="อีเมล" value={emailData.clientEmail} onChange={handleChange} />
            <input type="tel" placeholder="เบอร์โทรศัพท์ติดต่อ" value={emailData.clientPhone} onChange={handleChange} />
            <textarea name="" id="" cols="30" rows="10" placeholder="ข้อความของคุณ" value={emailData.clientMsg} onChange={handleChange}></textarea>
            <button type="button" onClick={handleSubmit}>ส่งข้อมูล</button>
        </form>
        </>
    );
};