import React, { useContext } from 'react';
import style from './items.module.css';
import ItemForm from './ItemForm';
import CartContext from '../../Store/Cart-Context';
import AddItems from '../Add-Items/AddItems';

function Items(props) {
    const cartCtx = useContext(CartContext)

    // const price = props.price + 'rs'

    const addToCartHandler = (index, amount) => {
        console.log(cartCtx.products[index])
        cartCtx.addItem({
            id: cartCtx.products[index].id,
            name: cartCtx.products[index].name,
            amount: amount,
            price: cartCtx.products[index].price
        })
    }

    return (
        <div className={style.container}>
        <AddItems/>
            <div className={style.items}>
                {cartCtx.products.map((item, index) => (
                    <div key={index} className={style.item}>

                        <div className={style.image}>
                            <img src={item.imgsrc} alt={item.alt} />
                        </div>

                        <div className={style.description}>
                            <p>{item.description}</p>
                            <p>Rs.{item.price} </p>
                        </div>
                        <ItemForm index={index} item={item} onAddToCart={addToCartHandler} />

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Items;
