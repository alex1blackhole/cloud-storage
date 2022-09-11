import React from 'react';
import {Link} from "react-router-dom";
import style from './navbarLink.module.css'

interface IProps {
    url: string
    title: string
    icon: JSX.Element
    active: boolean
}

const NavbarLinkUI = ({url, title, icon, active = false}: IProps) => {
    return (
        <Link to={url} className={`${style.wrapper} ${active ? style.active : ''}`}>
            {icon}
            <div className={style.title}>
                {title}
            </div>
        </Link>
    );
};

export default NavbarLinkUI;
