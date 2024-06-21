import React, { useContext, useEffect, useState } from 'react'
import logo from '../../../assets/photo_2024-06-11_10-50-57.jpg'
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
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
function Navbar() {
    const { scroll1Ref, scroll2Ref, userId, scroll3Ref, isMenuOpen, setIsMenuOpen, toggleMenu, scrollToSection, tokenDispatch, tokenState } = useContext(Context)
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
            setIsMenuOpen(false)
        }
        else {
            navigate('/login')
        }
    }
    return (
        <nav className={`md:h-[80px] bg-[#091a2a] text-white lg:h-[90px] xl:h-[100px] h-[60px] sm:h-[70px] sticky mb-[40px] top-0 left-0 ${isVisible ? 'shadow-[0px_5px_15px_#e6e6e6]' : ''} bg-[#F2F6FA] flex justify-around items-center w-[100%]`}>
            <div>
                <button onClick={logoButton}>
                    <img className='md:h-[70px] lg:h-[85px] xl:h-[100px] h-[60px]' src={logo} alt="" />
                </button>
            </div>
            <div className='flex items-center text-[16px] md:text-[28px] gap-[20px] md:gap-5 justify-center '>
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
            <div className='items-center hidden lg:flex gap-[30px]'>
                <NavLink to={'/products'} className={'hover:underline text-[28px] hover:text-[skyblue] transition-all duration-200'}>
                    Товары
                </NavLink>
                <button onClick={() => navigate(`/basket/${userId}`)} className='text-[30px] '>
                    <SlBasket />
                </button>
                <button onClick={adminHandler} className='text-[30px] '>
                    <IoPersonCircleSharp />
                </button>
                <button onClick={() => tokenDispatch(logOutAction())} className='text-[22px] flex font-[500] items-center hover:text-[skyblue] gap-[10px]'>
                    Выйти
                </button>
            </div>
            <button onClick={() => setIsMenuOpen(true)} className='lg:hidden flex text-[30px]'>
                <FiMenu />
            </button>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                    <div className='items-center flex text-[black] bg-white h-[400px] w-[230px] rounded shadow-lg flex-col gap-[30px] justify-center'>
                        <button className='relative left-[40%] top-[-5%] text-[25px]' onClick={() => setIsMenuOpen(false)}>
                            <IoMdClose />
                        </button>
                        <NavLink onClick={() => setIsMenuOpen(false)} to={'/products'} className={'hover:underline text-[28px] hover:text-[skyblue] transition-all duration-200'}>
                            Товары
                        </NavLink>
                        <button onClick={() => (
                            navigate('/basket'),
                            setIsMenuOpen(false))} className='hover:underline text-[28px] hover:text-[skyblue] transition-all duration-200 '>
                            Карзина
                        </button>
                        <button onClick={adminHandler} className='hover:underline text-[28px] hover:text-[skyblue] transition-all duration-200 '>
                            <h1>Профиль</h1>
                            <IoPersonCircleSharp />
                        </button>
                        <button onClick={() => tokenDispatch(logOutAction())} className='text-[28px] items-center hover:text-[skyblue] gap-[10px]'>
                            Выйти
                        </button>
                    </div>
                </div>
            )
            }
        </nav >
    )
}

export default Navbar