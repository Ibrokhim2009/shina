import React, { useContext, useEffect, useState } from 'react'
import logo from '../../../assets/shinaLogo.png'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { SlBasket } from 'react-icons/sl'
import { CiHeart, CiLogin } from 'react-icons/ci'
import { MdLogin } from 'react-icons/md'
import { Context } from '../../../App'
import { IoPersonCircleSharp } from 'react-icons/io5'
import axios from 'axios'
import { usersUrl } from '../../../../Urls'
import { logOutAction } from '../../../reducer/action'
function Navbar() {
    const { scroll1Ref, scroll2Ref, scroll3Ref, scrollToSection, tokenDispatch, tokenState } = useContext(Context)
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)
    const [navbarUsers, setNavbarUsers] = useState([])
    const { id } = useParams()
    console.log
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
    useEffect(() => {
        async function usersGet() {
            try {
                const rezult = await axios.get(usersUrl)
                setNavbarUsers(rezult?.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        usersGet()
    }, [])
    const findedUser = navbarUsers.filter(item => item.role == 'admin')
    // console.log(id)
    console.log(...findedUser)
    const logoButton = e => {
        navigate('/')
    }
    const mainButton = e => {
        navigate('/')
        scrollToSection(scroll1Ref)
    }
    const aboutButton = e => {
        navigate('/')
        scrollToSection(scroll2Ref)
    }
    const contactButton = e => {
        navigate('/')
        scrollToSection(scroll3Ref)
    }
    // console.log(tokenState)
    const adminHandler = e => {
        if (tokenState.token) {
            navigate('/admin')
        }
        else {
            navigate('/login')
        }
    }
    return (
        <nav className={`h-[100px] sticky mb-[40px] top-0 left-0 ${isVisible ? 'shadow-[0px_5px_15px_#e6e6e6]' : ''} bg-[#F2F6FA] flex justify-around items-center w-[100%]`}>
            <div>

                <button onClick={logoButton}>
                    <img className='h-[100px]' src={logo} alt="" />
                </button>
            </div>
            <div className='flex items-center text-[28px] w-[30%] justify-between '>
                {/* <NavLink className={'hover:underline hover:text-[skyblue] transition-all duration-200'}>
                    Популярные
                </NavLink> */}
                <NavLink onClick={mainButton} className={'hover:underline hover:text-[skyblue] transition-all duration-200'}>
                    Главная
                </NavLink>
                <NavLink onClick={aboutButton} className={'hover:underline hover:text-[skyblue] transition-all duration-200'}>
                    О нас
                </NavLink>
                <NavLink onClick={contactButton} className={'hover:underline hover:text-[skyblue] transition-all duration-200'}>
                    Заказать
                </NavLink>
            </div>
            <div className='flex items-center gap-[30px]'>
                <NavLink to={'/products'} className={'hover:underline text-[28px] hover:text-[skyblue] transition-all duration-200'}>
                    Товары
                </NavLink>
                <button onClick={() => navigate('/basket')} className='text-[30px] '>
                    <SlBasket />
                </button>
                <button onClick={adminHandler} className='text-[30px] '>
                    <IoPersonCircleSharp />
                </button>
                <button onClick={() => tokenDispatch(logOutAction())} className='text-[22px] flex font-[500] items-center hover:text-[skyblue] gap-[10px]'>
                    Выйти
                </button>
            </div>
        </nav>
    )
}

export default Navbar