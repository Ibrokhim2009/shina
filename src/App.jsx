import { createContext, useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Layout from './component/userComponent/layout/Layout'
import Navbar from './component/userComponent/navbar/Navbar'
import Footer from './component/userComponent/footer/Footer'
import Products from './component/userComponent/products/Products'
import Admin from './component/adminComponent/Admin'
export const Context = createContext()
function App() {

  const [product, setProduct] = useState([])
  return (
    <Context.Provider value={{ product, setProduct }}>
      <div className='bg-[#F2F6FA]'>
        <Navbar />
        <div className='w-[100%] min-h-[100vh] px-[10px] md:px-[20px] xl:px-[30px] pb-[80px] '>
          <div className='max-w-[1340px] m-auto'>
            <Routes>
              <Route element={<Layout />} path='/' />
              <Route element={<Products />} path='/products' />
              <Route element={<Admin />} path='/admin' />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default App
