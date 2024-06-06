import React, { useEffect, useState } from 'react'
import logo from '../../../assets/shinaLogo.png'
import { NavLink } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { SlBasket } from 'react-icons/sl'
import { CiHeart, CiLogin } from 'react-icons/ci'
import { MdLogin } from 'react-icons/md'
function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const scrollTrigger = windowHeight * 0.01; // Настройка точки срабатывания анимации

            if (scrollTop > scrollTrigger) {
                setIsVisible(true);
            }
            if (scrollTop < scrollTrigger) setIsVisible(false)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`h-[140px] sticky mb-[40px] top-0 left-0 ${isVisible ? 'shadow-[0px_5px_15px_#e6e6e6]' : ''} bg-[#F2F6FA] flex justify-around items-center w-[100%]`}>
            <img className='h-[100px]' src={logo} alt="" />
            <div className='flex items-center text-[28px] w-[30%] justify-between '>
                {/* <NavLink className={'hover:underline hover:text-[skyblue] transition-all duration-200'}>
                    Популярные
                </NavLink> */}
                <NavLink className={'hover:underline hover:text-[skyblue] transition-all duration-200'}>
                    О нас
                </NavLink>
                <NavLink className={'hover:underline hover:text-[skyblue] transition-all duration-200'}>
                    Товары
                </NavLink>
                <NavLink className={'hover:underline hover:text-[skyblue] transition-all duration-200'}>
                    Заказать
                </NavLink>
            </div>
            <div className='flex items-center gap-[30px]'>
                <button className='text-[30px]'>
                    {/* <CiHeart /> */}
                    {/* <FaHeart /> */}
                    <FaRegHeart />
                </button>
                <button className='text-[30px] '>
                    <SlBasket />
                </button>
                <button className='text-[22px] flex font-[500] items-center hover:text-[skyblue] gap-[10px]'>
                    <MdLogin className='text-[30px]' />
                    Log in
                </button>
            </div>
        </nav>
    )
}

export default Navbar