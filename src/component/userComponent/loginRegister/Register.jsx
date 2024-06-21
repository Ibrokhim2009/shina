import React, { useContext } from 'react'
import adminImage from '../../../assets/adminImage.png'
import axios from 'axios'
import { basketUrl, usersUrl } from '../../../../Urls'
import { Context } from '../../../App'
import { NavLink, useNavigate } from 'react-router-dom'
function Register() {
    const { usersArr, basketCard, setBasketCard } = useContext(Context)
    const navigate = useNavigate()
    const registerHandler = e => {
        e.preventDefault()
        const forma = new FormData(e.target)
        const { login, password, name } = Object.fromEntries(forma.entries())
        const registerUsersHandler = {
            password,
            login,
            name,
            role: 'user'
        }
        const usersBasketHandler = {
            password,
            login,
            name,
            products: basketCard ? basketCard : []
        }
        try {
            axios.post(usersUrl, registerUsersHandler)
                .then(res => {
                    setProduct([usersArr, registerUsersHandler])
                })

            axios.post(basketUrl, usersBasketHandler)
                .then(() => {
                    setBasketCard([basketCard, usersBasketHandler])
                })
        }
        catch (err) {
            console.log(err);
        }
        navigate('/login')
    }
    return (
        <form onSubmit={registerHandler} className='flex justify-center lg:justify-between pt-[50px] items-center '>
            <img src={adminImage} className='hidden lg:block' alt="" />
            <div className='flex flex-col items-start py-[20px] gap-5 w-[90%] lg:w-[40%] px-[30px] rounded-xl bg-[#306675]'>
                <h1 className='text-[40px] text-start ml-[20px] text-[white] mb-[20px] font-semibold'>Register</h1>
                <input className='w-[100%] outline-[1px] outline-[blue] h-[50px] pl-[20px] text-[18px] rounded-md' type="text" name="name" id="" placeholder='name' />
                <input className='w-[100%] outline-[1px] outline-[blue] h-[50px] pl-[20px] text-[18px] rounded-md' type="text" placeholder='login' name="login" id="" />
                <input className='w-[100%] outline-[1px] outline-[blue] h-[50px] pl-[20px] text-[18px] rounded-md' type="password" name="password" id="" placeholder='password' />
                <button className='w-[100%] hover:border-solid hover:border-[#1d721d] hover:bg-[white] hover:text-[#1d721d] font-[500] hover:border-[3px] transition-all duration-50 bg-[#1d721d] h-[50px] text-[20px] text-[white]  rounded-md '>Register</button>
                <p className='text-[18px] text-center text-[white] m-auto'>if you registed go to <NavLink to={'/login'} className={'text-[20px] hover:underline hover:text-[#3a348f] text-white'}> Log in</NavLink></p>
            </div>
        </form>
    )
}

export default Register