import React from 'react';
import LogoSVG from "../../assets/svg/LogoSVG";
import styles from "./navbar.module.css";
import UserSvg from "../../assets/svg/user/userSVG";
import {
    Link
} from "react-router-dom";
import {observer} from "mobx-react-lite";
import User from "../../mobx/user";

const Navbar = observer(() => {
    return (
        <div className={styles.wrapper}>
            <Link to='/'>
                <LogoSVG/>
            </Link>
            <div className={styles.user}>

                {
                    !User.isAuth &&
                    <>
                        <Link to={'login'}>
                            <div className={styles.link}>login</div>
                        </Link>
                        <Link to={'registration'}>
                            <div className={styles.link}>sign in</div>
                        </Link>
                    </>
                }

                {
                    User.isAuth &&
                    <>
                        <div className={styles.link} onClick={User.logOut}>logout</div>
                        <div className={styles.link}>{

                            JSON.stringify(User.currentUser, null, 4)

                        }</div>
                    </>
                }

                <UserSvg className={styles.userSvg}/>
            </div>

        </div>
    );
});

export default Navbar;
