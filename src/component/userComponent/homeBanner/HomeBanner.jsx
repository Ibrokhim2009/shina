import React from 'react'
import shina from '../../../assets/shina.png'
import logo from '../../../assets/shinaLogo.png'
function HomeBanner() {
    return (
        <div className='flex items-center rounded-[24px] pt-[50px] px-[30px] flex-col lg:flex-row shadow-[0px_0px_30px_#d6d6d6] bg-[#EAF1EB] justify-around'>
            <img className='w-[47%] lg:flex hidden' src={shina} alt="" />
            <div className='flex lg:items-start items-center flex-col  m-auto lg:m-o gap-[30px] w-[100%] lg:w-[40%] '>
                {/* <img src={logo} alt="" className='w-[100px]'/> */}
                <h1 className='text-[58px] lg:text-start text-center font-[500] mt-[-40px]'>Ballons</h1>
                <p className='text-[22px] lg:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
                    quas nostrum cupiditate magni magnam nisi labore in soluta minus consequuntur, ea quo voluptatibus?
                    Tenetur vero rerum sit atque ipsum necessitatibus harum. Quos quaerat, repudiandae est obcaecati et
                    illo eius aliquid!
                </p>
                <button className='w-[230px] rounded-xl hover:border-[blue] hover:bg-white hover:border-solid hover:border-[3px] transition-all duration-150 hover:text-[blue] text-[20px] text-white font-medium h-[50px] bg-[royalblue]'>Товары</button>
            </div>
            <img className='ld:w-[47%] w-[60%] flex lg:hidden' src={shina} alt="" />
        </div>
    )
}

export default HomeBanner