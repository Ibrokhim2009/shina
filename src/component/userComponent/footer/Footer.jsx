import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import { PiTelegramLogo } from 'react-icons/pi'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className='lg:py-[30px] py-[10px] bg-[#e8f4ff] w-[100%] flex items-center justify-between xl:px-[40px] md:px-[30px] px-[20px]'>
            <div className='flex items-start gap-[10px] flex-col'>
                <div className='flex items-center gap-[20px] text-[gray] text-[10px] md:text-[24px]'>
                    <NavLink>
                        О нас
                    </NavLink>
                    <NavLink>
                        Товары
                    </NavLink>
                    <NavLink>
                        Заказать
                    </NavLink>
                    {/* <NavLink>
                        Заказать
                    </NavLink> */}
                    <NavLink>
                        Log In
                    </NavLink>
                </div>
                <h1 className='text-[#5C5C6D] text-[10px] md:text-[14px]'>
                    © 2021 Shina.uz
                </h1>
            </div>
            <div className='flex items-center text-[16px] lg:text-[30px] md:gap-[20px] gap-[10px]'>
                <button>
                    <FaInstagram />
                </button>
                <button>
                    <PiTelegramLogo />
                </button>
                <button>
                    <FiYoutube />
                </button>
                <button>
                    <RiFacebookCircleLine />
                </button>
            </div>

        </footer>
    )
}

export default Footer