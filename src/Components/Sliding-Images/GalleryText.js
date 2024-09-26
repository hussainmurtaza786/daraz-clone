import React from 'react'
import style from './GalleryText.module.css'

function GalleryText() {
    const listItem = ["Groceries & Pets", "Health & Beauty", "Men's Fashion", 
        "Women's Fashion", "Mother & Baby", "Home & Lifestyle", "Electronic Devices", 
        "Electronic Accessories", "TV & Home Appliances", "Sports & Outdoor", 
        "Watches, Bags & Jewellery", "Automotive & Motorbike"];

    return (
        <div className={style.container}>
            <div className={style.text}>
                {listItem.map((list, index) => (
                    <p key={index}>
                        {list}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default GalleryText;
