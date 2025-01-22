import React from 'react'
import { Link } from 'react-router-dom'

function AboutMe() {
    return (
        <>
            <nav className='p-5 flex justify-center text-white w-[100%] max-w-[1440px]'>
                <ul className='flex gap-28 '>
                    <Link to='/'><a href="">Main</a></Link>
                    <Link to='/AboutMe'><a href="">About me</a></Link>
                    <Link to='/Contact'><a href="">Contact</a></Link>
                </ul>
            </nav>
            <div className="bagraund max-w-[1440px] text-white p-10 ">
                <div className='flex flex-col items-center'>
                    <h1 className='text-[22px] mb-5'>Men haqimda</h1>
                    <p className='text-[22px] mb-5'>
                        <strong>Ism:</strong> Asadbek
                    </p>
                    <p className='text-[22px] mb-5'>
                        <strong>Familiya:</strong> Muxsimov
                    </p>
                    <p className='text-[22px] mb-5'>
                        <strong>Yosh:</strong> 18
                    </p>
                    <p className='text-[22px] mb-5'>
                        Najot Ta'lim o'quv markazida frontend dasturchi bo‘lib tahsil olyapman.
                    </p>
                </div>
                <div className='flex justify-end items-end h-[55%]'>
                    <button className="bg-white text-black px-[10px] py-[5px] rounded-md text-[20px]" onClick={() => window.history.back()}>
                        Back
                    </button>
                </div>
            </div>
        </>
    )
}

export default AboutMe