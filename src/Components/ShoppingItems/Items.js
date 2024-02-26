import React from 'react';
import style from './items.module.css';

function Items({ dummy }) {
    const dummyData = [
        {
            src: "https://static-01.daraz.pk/p/b372d23c5f330e84232a8d469adbed4c.jpg",
            description: 'Bracelet for Women Girl Accessories  ',
            price: 550,
            alt: 'Image not found'
        },
        {

            src: "https://pk-live-21.slatic.net/kf/S96ad4c03ab264caaae49760f6be727e0N.jpg",
            description: ' New Multifunctional Chest Bag Mens  ',
            price: 389,
            alt: 'Image not found'
        },
        {

            src: "https://static-01.daraz.pk/p/551460e05ce64b1d88cc23b89abc0fda.jpg_750x750.jpg_.webp",
            description: 'Homel T800/T900/U8 Ultra Smart Watch for  ',
            price: 1669,
            alt: 'Image not found'
        },
        {

            src: "https://static-01.daraz.pk/p/a1d54b315d49fcdd67c0cdcf0d68311f.jpg_750x750.jpg_.webp",
            description: 'Swiss Miss Natural Pink Lipstick Matte ',
            price: 349,
            alt: 'Image not found'
        },
        {

            src: "https://pk-live-21.slatic.net/kf/S3d823897b5144b00bfb9c1ca2ea19c105.jpg_750x750.jpg_.webp",
            description: 'Wiereless5.0 Bluetooth Headset HandsFree',
            price: 300,
            alt: 'Image not found'
        },
        {

            src: "https://pk-live-21.slatic.net/kf/Sac41d9fc71214e5184bda005807e688fo.jpg_750x750.jpg_.webp",
            description: 'Rc Helicopter 3.5Ch 2.5Ch Rc Plane 2.4 ',
            price: 2989,
            alt: 'Image not found'
        },

        {

            src: "https://static-01.daraz.pk/p/2bae885e4b9c169a88a8b17a1304436a.png",
            description: 'Pack of 5 Microfiber Cleaning Cloths ',
            price: 299,
            alt: 'Image not found'
        },
        {

            src: "https://drzvideo.slatic.net/vod-4e6588/1af4bd806ffd71ee95821426d1810102/snapshots/normal/21A33BBF-18B51CB0B9C-1637-5547-817-8203000001.jpg",
            description: 'Enhance Your Flavors with Ty Foods',
            price: 117,
            alt: 'Image not found'
        },
        {

            src: "https://pk-live-21.slatic.net/kf/S184836de123142a3b2f2e9072775b748A.jpg_750x750.jpg_.webp",
            description: 'Mens Fashion  Comfortable Shoes',
            price: 1579,
            alt: 'Image not found'
        },
        {

            src: "https://static-01.daraz.pk/p/5b8e2ef0382501c1dfe1e14e5738370c.jpg_750x750.jpg_.webp",
            description: 'Classic Retro Square Sunglasses for Men',
            price: 183,
            alt: 'Image not found'
        },
        {

            src: "https://static-01.daraz.pk/p/b65513b2457941c066337914ecab5f5a.jpg_750x750.jpg_.webp",
            description: 'New X Style Squeeze Mop Floor Mops with',
            price: 1098,
            alt: 'Image not found'
        },
        {

            src: "https://static-01.daraz.pk/p/4407a1bc4ba1129ddc534116114d0b5e.jpg_200x200q80-product.jpg_.webp",
            description: 'Single Pieces of 1kg 2kg 3kg 4kg 5kg',
            price: 275,
            alt: 'Image not found'
        },

    ]


    return (
        <div className={style.items}>
            {dummyData.map((item, index) => (
                <div key={index} className={style.item}>

                    <div className={style.image}>
                        <img src={item.src} alt={item.alt} />
                    </div>

                    <div className={style.description}>
                        <p>{item.description}</p>
                        <p>Rs.{item.price}</p>
                    </div>
                    <div className={style.order}>
                        <button>BuyNow</button>
                        <button>Add To Cart</button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Items;
