import React, { useState } from 'react';
import style from './AddItems.module.css';
import Modal from '../UI/Modal';

function AddItems(props) {
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');

    const imageHandler = (event) => {
        setImage(event.target.value);
    };

    const descHandler = (event) => {
        setDesc(event.target.value);
    };

    const priceHandler = (event) => {
        setPrice(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setDesc('');
        setPrice('');
        setImage('');
    };

    return (
        <Modal onClose={props.onClose}>
            <form onSubmit={onSubmitHandler} className={style['add-items']}>
                <label>
                    Image:
                    <input value={image} onChange={imageHandler} type="file" />
                </label>
                <label>
                    Description:
                    <input value={desc} onChange={descHandler} type="text" />
                </label>
                <label>
                    Price:
                    <input value={price} onChange={priceHandler} type="number" />
                </label>
                <button>Submit</button>
            </form>
        </Modal>
    );
}

export default AddItems;
