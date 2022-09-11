import React from 'react';
import Search from "../search/Search";
import UserBar from "../userBar/UserBar";
import style from './header.module.css'

const Header = () => {
    return (
        <div className={style.wrapper}>
            <Search/>
            <UserBar/>
        </div>
    );
};

export default Header;
