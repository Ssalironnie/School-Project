import React, { Component } from 'react';
import { FaInstagram, FaVk, FaWhatsapp, FaEnvelope } from "react-icons/fa";

class Footer extends Component {
    render() {
        return (
            <>
                <footer className='footer'>
                    <div className='text-center'>
                        <a className='icon-link-dark' target='_blank'>
                            <FaVk className='icon-size-20 m-1' />
                        </a>
                        <a className='icon-link-dark' target='_blank'>
                            <FaWhatsapp className='icon-size-20 m-1' />
                        </a>
                        <a className='icon-link-dark' target='_blank'>
                            <FaInstagram className='icon-size-20 m-1' />
                        </a>
                        <a className='icon-link-dark' target='_blank'>
                            <FaEnvelope className='icon-size-20 m-1' />
                        </a>
                        <p className='m-1'>COPYRIGHT &copy; SCIENTIFIC-JOURNAL.RU 2022</p>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;