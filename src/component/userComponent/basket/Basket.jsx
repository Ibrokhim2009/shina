import React, { useContext } from 'react'
import { Context } from '../../../App'

function Basket() {
    const { basketCard } = useContext(Context)
    console.log(basketCard)
    return (
        <div>
            {basketCard?.map(item => (
                <div>
                    <p>
                        {item.des}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Basket