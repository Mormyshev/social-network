import React from "react";
import s from "./Header.module.css"
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__logo}></div>
            <div className={s.header__burger_btn}></div>
        </header>
    )
}

export default Header;