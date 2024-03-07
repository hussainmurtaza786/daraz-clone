import React, { useState } from 'react'
import style from './AddItems.module.css'
function AddItems() {


    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')

    const imageHandler = (event) => {
        setImage(event.target.value)
    }

    const descHandler = event => {
        setDesc(event.target.value)
    }

    const priceHandler = event => {
        setPrice(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        setDesc();
        setPrice()
        setImage()
    }
    console.log(onSubmitHandler)
    return (
        <form onSubmit={onSubmitHandler} className={style['add-items']}>

            <label >
                Image:
                <input value={image} onChange={imageHandler} type="file" />
            </label>
            <label >
                description:
                <input value={desc} onChange={descHandler} type="text" />
            </label>
            <label >
                Price:
                <input value={price} onChange={priceHandler} type="number" />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default AddItems