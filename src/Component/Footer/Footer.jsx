import React from 'react';
import footerImg from '../../assets/logo-xl.png'

const Footer = () => {
    return (
        <div className='text-[#244D3F] max-w-277 px-61 pt-20 text-center'>
           <img src={footerImg} className='h-10 w-10' alt="FooterImage" />
        </div>
    );
};

export default Footer;