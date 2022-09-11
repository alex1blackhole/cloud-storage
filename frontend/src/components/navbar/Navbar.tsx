import React from 'react';
import LogoSVG from "../../assets/svg/LogoSVG";
import styles from "./navbar.module.css";
import {
    Link, useLocation
} from "react-router-dom";
import DashboardSVG from "../../assets/svg/DashboardSVG";
import NavbarLinkUI from "../../ui/navbarLink/navbarLinkUI";
import SettingsSVG from "../../assets/svg/SettingsSVG";
import FolderSVG from "../../assets/svg/FolderSVG";
import SharedSVG from "../../assets/svg/SharedSVG";

const links = [

    {
        id: 1,
        url: '/dashboard',
        title: 'dashboard',
        icon: <DashboardSVG/>
    },

    {
        id: 2,
        url: '/drive',
        title: 'my files',
        icon: <FolderSVG/>
    },


    {
        id: 3,
        url: '/shared',
        title: 'shared files',
        icon: <SharedSVG/>
    },

    {
        id: 4,
        url: '/settings',
        title: 'settings',
        icon: <SettingsSVG/>
    }

]

const Navbar = () => {

    let location = useLocation();

    const activeUrl = '/' + location.pathname.split('/')[1]

    return (
        <div className={styles.wrapper}>

            <Link to='/'>
                <div className={styles.logo}>
                    <LogoSVG/>
                    <div>my-store</div>
                </div>
            </Link>

            {
                links.map(link => <NavbarLinkUI key={link.id}  {...link} active={link.url === activeUrl}/>)
            }

        </div>
    );
};

export default Navbar;
