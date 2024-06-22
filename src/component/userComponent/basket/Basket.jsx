import React, { useContext } from 'react'
import { Context } from '../../../App'

function Basket() {
    const { basketCard } = useContext(Context)
    console.log(basketCard)
    return (
        <div>
            <div className='grid grid-cols-1'>
                <div className=''>
                    <img className='w-[30%] h-[300px]' src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <div>
                        <h1>Ballon</h1>
                        <div chi>
                            <button>-</button>
                            <h1></h1>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket