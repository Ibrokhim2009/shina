import { createContext, useEffect, useReducer, useRef, useState } from 'react'

import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import Layout from './component/userComponent/layout/Layout'
import Navbar from './component/userComponent/navbar/Navbar'
import Footer from './component/userComponent/footer/Footer'
import Admin from './component/adminComponent/Admin'
import Products from './component/userComponent/products/Products'
import { tokenInitialState, tokenReducer } from './reducer/tokenReducer'
import Login from './component/userComponent/loginRegister/Login'
import ProtectedRoutes from './component/protectedRoutes/ProtectedRoutes'
import { prodUrl } from '../Urls'
import axios from 'axios'
import Register from './component/userComponent/loginRegister/Register'
import AdminEdit from './component/adminComponent/adminSidebar/adminTable/AdminEdit'
import Basket from './component/userComponent/basket/Basket'
import PageNotFound from './component/404Page/PageNotFound'
export const Context = createContext()
function App() {
  const [product, setProduct] = useState([])
  const [usersArr, setUsersArr] = useState([])
  const [tokenState, tokenDispatch] = useReducer(tokenReducer, tokenInitialState)
  const [baze, setBaze] = useState([])
  // console.log(useParams())
  const [userId, setUserId] = useState(null)
  const [basketCard, setBasketCard] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scroll1Ref = useRef()
  const scroll3Ref = useRef()
  const scroll2Ref = useRef()
  const location = useLocation()
  // console.log(product)
  // token useEffect
  const tokens = JSON.stringify(tokenState.token)
  useEffect(() => {
    localStorage.setItem('token', tokens)
    // localStorage.setItem('id', userId)
  }, [tokenState.token])
  // scrollHandler
  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  // DeleteHandler
  const handleDelete = (id) => {
    axios.delete(`${prodUrl}/${id}`)
      .then(() => {
        setProduct(cards.filter(card => card.id !== id));
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };
  useEffect(() => {
    async function prodHandler() {
      try {
        const rezult = await axios?.get(prodUrl)
        setProduct(rezult?.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    prodHandler()
  }, [])
  console.log(userId)
  const addToCart = (element) => {
    setBasketCard([...basketCard, element]);
    console.log(basketCard)

  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  };
  return (
    <Context.Provider value={{ product, tokenState, userId, setUserId, toggleMenu, isMenuOpen, setIsMenuOpen, addToCart, usersArr, setUsersArr, handleDelete, tokenDispatch, scrollToSection, scroll3Ref, setProduct, scroll1Ref, scroll2Ref }}>
      <div className='bg-[#F2F6FA]'>
        {location.pathname !== '/login' && location.pathname !== '/register' ? <Navbar /> : ''}
        <div className='w-[100%] min-h-[100vh] px-[10px] md:px-[20px] xl:px-[30px] pb-[80px] '>
          <div className='max-w-[1340px] m-auto'>
            <Routes>
              <Route element={<Login />} path='/login' />
              <Route element={<Register />} path='/register' />
              <Route element={<ProtectedRoutes />}>
                <Route element={<Products />} path='/products' />
                <Route element={<Layout />} path='/' />
                <Route element={<AdminEdit />} path='/admin/:id' />
                <Route element={<Admin />} path='admin' />
                <Route element={<Basket />} path='basket' />
              </Route>
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </Context.Provider>
  )
}

export default App







// TZ
// 3 data baza kere bizaga
// 1: 
// usersUrl:[

// 
// 
// 
// 
// 
// 
// 
// 
