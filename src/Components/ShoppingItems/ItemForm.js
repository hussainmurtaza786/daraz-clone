import React, { useContext } from 'react'
import style from './ItemForm.module.css'
import CartContext from '../../Store/Cart-Context'

function ItemForm({ item }) {
    const { addItem } = useContext(CartContext)
    const onAddToCart = (event) => {
        event.preventDefault()
        addItem(item)
        console.log('add to cart')
    }
    return (
        <form  >
            <div className={style.order}>
                <button>BuyNow</button>
                <button onClick={onAddToCart}>Add To Cart  </button>
            </div>
        </form>
    )
}

export default ItemForm