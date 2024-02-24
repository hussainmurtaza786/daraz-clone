import React from 'react'
import style from './Header.module.css'
import LoginIcon from './LoginIcon'
import CartIcon from '../Cart/CartIcon'
function Header() {
    return (
        <div className={style.header}>
            <img src="//icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png" alt="Daraz"></img>
            <div className={style['search-container']}>
                <div className={style["search-bar"]}>
                    <input type="text" id="searchInput" placeholder="Search in Daraz" />
                    <button className={style.btn}>
                        <img className={style.img} src="https://logowik.com/content/uploads/images/search7780.jpg" width={'30px'} alt="Search" />
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
            <CartIcon />
        </div>
    )
}


export default Header
