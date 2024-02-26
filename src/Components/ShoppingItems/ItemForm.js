import React, { useContext } from 'react'
import style from './ItemForm.module.css'
import CartContext from '../../Store/Cart-Context'

function ItemForm() {
    const ctx = useContext(CartContext)
    const onSubmit = (event) => {
        event.preventDefault()
        console.log('its submited')
    }
    return (
        <form onSubmit={onSubmit} >
            <div className={style.order}>
                <button>BuyNow</button>
                <button>Add To Cart</button>
            </div>
        </form>
    )
}

export default ItemForm