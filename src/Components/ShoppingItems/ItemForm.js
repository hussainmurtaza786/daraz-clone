import React, { useRef, useContext, useState } from 'react'
import style from './ItemForm.module.css'
import CartContext from '../../Store/Cart-Context'
import Input from '../UI/Input'

function ItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()
    const submitHandler = event => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmount > 5) {
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(props.index, enteredAmountNumber)
    }

    return (
        <form className={style.form} onSubmit={submitHandler} >
            <Input ref={amountInputRef} label="Amount" input={{ id: 'amount' + props.item.id, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }} />
                <button>BuyNow</button>
                <button >Add To Cart  </button>
            {!amountIsValid && <p> Please enter amount between 1-5</p>}
        </form>
    )
}

export default ItemForm