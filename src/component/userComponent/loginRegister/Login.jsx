import React, { useContext, useEffect } from 'react'
import adminImage from '../../../assets/adminImage.png'
import { logInAction } from '../../../reducer/action'
import { Context } from '../../../App'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { usersUrl } from '../../../../Urls'
function Login() {
    const { tokenDispatch, setUsersArr, usersArr, userId, setUserId } = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {

        const registerUrlFormGet = async e => {
            try {
                const rezult = await axios?.get(usersUrl)
                setUsersArr(rezult?.data)
                console.log(rezult?.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        registerUrlFormGet()
    }, [])
    const loginHandler = e => {
        e.preventDefault()
        const forma = new FormData(e.target)
        const { login, password } = Object.fromEntries(forma.entries())
        const findedElement = usersArr.find(item => item.login == login && item.password == password)
        console.log(findedElement)
        setUserId(findedElement.id)
        if (findedElement) {
            tokenDispatch(logInAction())
            navigate(`/`)
        }
        else {
            alert('tel yoki parol hato')
        }
    }
    return (

        <form onSubmit={loginHandler} className='flex justify-center lg:justify-between items-center pt-[50px]'>
            <img src={adminImage} className='hidden lg:block w-[40%]' alt="" />
            <div className='flex flex-col items-start py-[20px] gap-5 w-[90%] lg:w-[40%] px-[30px] rounded-xl bg-[#306675]'>
                <h1 className='text-[40px] text-start ml-[20px] text-[white] mb-[20px] font-semibold'>Log In</h1>
                <input className='w-[100%] outline-[1px] outline-[blue] h-[50px] pl-[20px] text-[18px] rounded-md' type="text" placeholder='login' name="login" id="" />
                <input className='w-[100%] outline-[1px] outline-[blue] h-[50px] pl-[20px] text-[18px] rounded-md' type="password" name="password" id="" placeholder='password' />
                <button className='w-[100%] hover:border-solid hover:border-[#1d721d] hover:bg-[white] hover:text-[#1d721d] font-[500] hover:border-[3px] transition-all duration-50 bg-[#1d721d] h-[50px] text-[20px] text-[white]  rounded-md '>Log In</button>
                <p className='text-[18px] text-[white] m-auto'>Have you ever been <NavLink className={'text-[20px] hover:underline hover:text-[#3a348f] text-white'} to={'/register'}>Registed</NavLink></p>
            </div>
        </form>
    )
}

export default Login