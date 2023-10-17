// import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>

            <footer className=' p-10 bg-neutral text-neutral-content  '
               data-aos="flip-down"
            >
                <div className=" footer text-center justify-center md:gap-52  flex flex-wrap  mx-auto md:mb-10 mb-6">
                    <div>
                        <header className="footer-title">Categories</header>
                        <a className="link link-hover">Toyota</a>
                        <a className="link link-hover">Ford</a>
                        <a className="link link-hover">BMW</a>
                        <a className="link link-hover">Mercedes-Benz</a>
                    </div>
                    <div>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
                <div className="bg-neutral text-white  pb-8  text-center ">
                    <div className='flex flex-wrap lg:w-full md:w-1/3 w-1/3 mx-auto lg:gap-14 md:gap-12 gap-6 justify-center text-center '>
                        <FaFacebook className='text-3xl  '></FaFacebook>
                        <FaTwitter className='text-3xl'></FaTwitter>
                        <FaYoutube className='text-3xl'></FaYoutube>
                        <FaInstagram className='text-3xl'></FaInstagram>
                        <FaLinkedin className='text-3xl'></FaLinkedin>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default Footer;