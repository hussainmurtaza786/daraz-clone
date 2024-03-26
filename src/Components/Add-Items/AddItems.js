import React, { useState } from 'react';
import style from './AddItems.module.css';

function AddItems({ onAddItem }) {
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate form inputs
        if (!image || !description || !price) {
            alert('Please fill all fields');
            return;
        }

        // Create a new item object
        const newItem = {
            imgsrc: image,
            description: description,
            price: parseInt(price),
            name: name
        };

        // Pass the new item to the parent component
        onAddItem(newItem);

        // Reset form inputs
        setImage('');
        setDescription('');
        setPrice('');
        setName('')

    };

    const handleOnChangeFile = (event) => {
        const file = event.target.files.item(0);
        if (!file) return
        const imgUrl = URL.createObjectURL(file);
        // console.log('New file recieved', event.target.files.item(0));
        // console.log('New file recieved', event.target.files);
        setImage(imgUrl)
        console.log(imgUrl)
    }

    return (
        <form className={style['add-items']} onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Image:
                <input type="file" multiple onChange={handleOnChangeFile} />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddItems;
