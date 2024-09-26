import React, { useContext, useState } from 'react';
import style from './items.module.css';
import ItemForm from './ItemForm';
import CartContext from '../../Store/Cart-Context';
import AddItems from '../Add-Items/AddItems';

function Items(props) {
    const cartCtx = useContext(CartContext);
    const [showAddItems, setShowAddItems] = useState(false);

    const addToCartHandler = (index, amount) => {
        cartCtx.addItem({
            id: cartCtx.products[index].id,
            name: cartCtx.products[index].name,
            amount: amount,
            price: cartCtx.products[index].price
        });
    };

    const addItemsHandler = () => {
        setShowAddItems((prevState) => !prevState);
    };

    const closeAddItemsHandler = () => {
        setShowAddItems(false);  // This will close the modal
    };

    return (
        <div className={style.container}>
            <div>
                <button onClick={addItemsHandler}>
                    {showAddItems ? 'Hide Add Items' : 'Add Items'}
                </button>
                {showAddItems && <AddItems onClose={closeAddItemsHandler} />}
            </div>
            <div className={style.items}>
                {cartCtx.products.map((item, index) => (
                    <div key={index} className={style.item}>
                        <div className={style.image}>
                            <img src={item.imgsrc} alt={item.alt} />
                        </div>

                        <div className={style.description}>
                            <p>{item.description}</p>
                            <p>Rs.{item.price}</p>
                        </div>
                        <ItemForm 
                            index={index} 
                            item={item} 
                            onAddToCart={addToCartHandler} // Pass the handler to ItemForm
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Items;
