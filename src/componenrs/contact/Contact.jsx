import React from 'react'
import { Link } from 'react-router-dom';


function Contact() {
    return (
        <>
            <nav className='p-5 flex justify-center text-white w-[100%] max-w-[1440px]'>
                <ul className='flex gap-28 '>
                    <Link to='/'><a href="">Main</a></Link>
                    <Link to='/AboutMe'><a href="">About me</a></Link>
                    <Link to='/Contact'><a href="">Contact</a></Link>
                </ul>
            </nav>
            <div className="bagraund text-white max-w-[1440px] p-10 h-[600px] md:h-[660px]">
                <div className=' flex flex-col items-center'>
                    <h1 className='text-[22px] mb-5'>Aloqa</h1>
                    <p className='text-[22px] mb-5'>
                        <strong>Telegram:</strong>{" "}
                        <a
                            href="https://t.me/Muxsimov_o1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @Muxsimov_o1
                        </a>
                    </p>
                    <p  className='text-[22px] mb-5'>
                        <strong>Instagram: </strong>
                        <a href="https://www.instagram.com/mukhsimov_a7">mukhsimov_a7</a>
                    </p>
                    <p className='text-[22px]'>
                        <strong>Telefon:</strong> +998 94 400 32 44
                    </p>
                </div>
                <div className='flex justify-end items-end h-[68%]'>
                    <button className="bg-white text-black px-[10px] py-[5px] rounded-md text-[20px]" onClick={() => window.history.back()}>
                        Back
                    </button>
                </div>
            </div>
        </>
    );
}


export default Contact