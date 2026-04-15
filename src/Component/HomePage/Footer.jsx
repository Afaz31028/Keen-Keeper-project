import React from 'react';
import footerImg from '../../assets/logo-xl.png'
import { Link } from 'react-router';
import socialImg1 from '../../assets/instagram.png'
import socialImg2 from '../../assets/facebook.png'
import socialImg3 from '../../assets/twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#244D3F] max-w-full px-61 pt-20 text-center h-[413px] mt-20 mx-auto'>
            <div className='flex justify-center'>
                <img className='text-center' src={footerImg} alt="FooterImage" />
            </div>
            <p className='text-gray-400 mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='text-base-100 text-xl font-medium mt-6'>Social Links</p>
            <div className='flex gap-3 justify-center items-center mt-4 '>
                <Link><img src={socialImg1} alt=""/></Link>
                <Link><img src={socialImg2} alt=""/></Link>
                <Link><img src={socialImg3} alt=""/></Link>
            </div>
            <div className='flex justify-between items-center text-[#FAFAFA] mt-10 border-t border-gray-600 py-5'>
                <div>© 2026 KeenKeeper. All rights reserved.</div>
                <div className='flex gap-5'>
                    <p>Privecy Policy</p>
                    <p>Terms & Condition</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;