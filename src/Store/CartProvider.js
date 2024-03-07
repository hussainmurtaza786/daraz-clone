import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
    items: [],
    products: [
        {
            id: '1',
            name: 'Bracelet',
            imgsrc: "https://static-01.daraz.pk/p/b372d23c5f330e84232a8d469adbed4c.jpg",
            description: 'Bracelet for Women Girl Accessories  ',
            price: 550,
            alt: 'Image not found'
        },
        {
            id: '2',
            name: 'Mutli-BAG',
            imgsrc: "https://pk-live-21.slatic.net/kf/S96ad4c03ab264caaae49760f6be727e0N.jpg",
            description: ' New Multifunctional Chest Bag Mens  ',
            price: 389,
            alt: 'Image not found'
        },
        {
            id: '3',
            name: 'Smart Watch',
            imgsrc: "https://static-01.daraz.pk/p/551460e05ce64b1d88cc23b89abc0fda.jpg_750x750.jpg_.webp",
            description: 'Homel T800/T900/U8 Ultra Smart Watch for  ',
            price: 1669,
            alt: 'Image not found'
        },
        {
            id: '4',
            name: 'Lipstick',
            imgsrc: "https://static-01.daraz.pk/p/a1d54b315d49fcdd67c0cdcf0d68311f.jpg_750x750.jpg_.webp",
            description: 'Swiss Miss Natural Pink Lipstick Matte ',
            price: 349,
            alt: 'Image not found'
        },
        {
            id: '5',
            name: 'Headset',
            imgsrc: "https://pk-live-21.slatic.net/kf/S3d823897b5144b00bfb9c1ca2ea19c105.jpg_750x750.jpg_.webp",
            description: 'Wiereless5.0 Bluetooth Headset HandsFree',
            price: 300,
            alt: 'Image not found'
        },
        {
            id: '6',
            name: 'Rc Helicopter',
            imgsrc: "https://pk-live-21.slatic.net/kf/Sac41d9fc71214e5184bda005807e688fo.jpg_750x750.jpg_.webp",
            description: 'Rc Helicopter 3.5Ch 2.5Ch Rc Plane 2.4 ',
            price: 2989,
            alt: 'Image not found'
        },

        {
            id: '7',
            name: 'Cleaning Cloth',
            imgsrc: "https://static-01.daraz.pk/p/2bae885e4b9c169a88a8b17a1304436a.png",
            description: 'Pack of 5 Microfiber Cleaning Cloths ',
            price: 299,
            alt: 'Image not found'
        },
        {
            id: '8',
            name: 'Ty Food',
            imgsrc: "https://drzvideo.slatic.net/vod-4e6588/1af4bd806ffd71ee95821426d1810102/snapshots/normal/21A33BBF-18B51CB0B9C-1637-5547-817-8203000001.jpg",
            description: 'Enhance Your Flavors with Ty Foods',
            price: 117,
            alt: 'Image not found'
        },
        {
            id: '9',
            name: 'Shoes',
            imgsrc: "https://pk-live-21.slatic.net/kf/S184836de123142a3b2f2e9072775b748A.jpg_750x750.jpg_.webp",
            description: 'Mens Fashion  Comfortable Shoes',
            price: 1579,
            alt: 'Image not found'
        },
        {
            id: '10',
            name: 'Sunglasses',
            imgsrc: "https://static-01.daraz.pk/p/5b8e2ef0382501c1dfe1e14e5738370c.jpg_750x750.jpg_.webp",
            description: 'Classic Retro Square Sunglasses for Men',
            price: 183,
            alt: 'Image not found'
        },
        {
            id: '11',
            name: 'Mop',
            imgsrc: "https://static-01.daraz.pk/p/b65513b2457941c066337914ecab5f5a.jpg_750x750.jpg_.webp",
            description: 'New X Style Squeeze Mop Floor Mops with',
            price: 1098,
            alt: 'Image not found'
        },
        {
            id: '12',
            name: 'Dumbles',
            imgsrc: "https://static-01.daraz.pk/p/4407a1bc4ba1129ddc534116114d0b5e.jpg_200x200q80-product.jpg_.webp",
            description: 'Single Pieces of 1kg 2kg 3kg 4kg 5kg',
            price: 275,
            alt: 'Image not found'
        },

    ],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        console.log(state.items)
        const updatedTotalAmount = state.totalAmount + action.item.price
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex];
        console.log('existingCartItemIndex -->'+existingCartItemIndex,'existingCartItem -->'+ existingCartItem)
        let updatedItems = [];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }


        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }


    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id
        )
        const existingItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)

        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem

        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'fullRemove') {
        const updatedItems = state.items.filter(item => item.id !== action.id);
        const updatedTotalAmount =
            state.totalAmount - state.items.find(item => item.id === action.id).price * state.items.find(item => item.id === action.id).amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return state;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    };
    const removeItemToCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
    };
    const removeFUllItemFromCartHanlder = (id) => {
        dispatchCartAction({ type: 'fullRemove', id: id })
    }
    console.log(cartState.products)
    const cartContext = {
        items: cartState.items,
        products: cartState.products,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        removeFullItem: removeFUllItemFromCartHanlder
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
