import React, { useState } from 'react'
import style from './Header.module.css'
import LoginIcon from './LoginIcon'
import CartIcon from '../Cart/CartIcon'
function Header(props) {


    return (
        <div className={style.header}>
            <img src="//icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png" alt="Daraz"></img>
            <div className={style['search-container']}>
                <div className={style["search-bar"]}>
                    <input type="text" id="searchInput" placeholder="Search in Daraz" />
                    <button className={style.btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="orange" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={style['log-sig']}>
                <div className={style.login}>
                    <LoginIcon />
                    <label > Login</label>
                </div>
                <hr />
                <div className={style.signUp}>
                    <label >SignUp</label>
                </div>
            </div>
            <button onClick={toggleCartVisibility} className={style.cartbtn}  >
                <CartIcon />
            </button>
        </div>
    )
}


export default Header
