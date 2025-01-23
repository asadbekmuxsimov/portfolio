import React from 'react'
import rasm from '../../assets/photo.jpg'
import '../../App.css'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <>
            <nav className='p-5 flex justify-center text-white w-[100%] max-w-[1440px]'>
                <ul className='flex gap-28 '>
                    <Link to='/'><a href="">Main</a></Link>
                    <Link to='/AboutMe'><a href="">About me</a></Link>
                    <Link to='/Contact'><a href="">Contact</a></Link>
                </ul>
            </nav>
            <div className='bagraund flex gap-10 justify-center p-20 flex-col md:flex-row items-center  max-w-[1440px] h-full md:h-[660px]'>
                <div className=' rounded-xl w-96 md:w-[900px] pt-30 md:pt-1'>
                    <img className='  w-full h-full rounded-3xl' src={rasm} alt="" />
                </div>
                <div className='text-white flex flex-col '>
                    <h1 className=' text-[50px] mb-5'>Bu mening shaxsiy sahifam</h1>
                    <p className='mb-5 text-[20px]'>Frontend dasturchi sifatida o'zimni rivojlantiryapman.</p>
                    <p className='text-[20px]'>
                        Ushbu surat bahorning ilk kunlarida tushilgan. O‘sha paytlarda texnologiyaga
                        bo‘lgan qiziqishim yanada ortayotgan payt edi. Bugun esa bu qiziqish meni
                        web-dasturlash olamiga olib keldi.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Main