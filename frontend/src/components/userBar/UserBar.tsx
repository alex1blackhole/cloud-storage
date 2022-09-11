import React from 'react';
import style from './userBar.module.css'
import {observer} from "mobx-react-lite";
import User from "../../mobx/user";
import UserSvg from "../../assets/svg/user/userSVG";
import {Link, useNavigate} from "react-router-dom";

const UserBar = () => {

    let navigate = useNavigate();

    function handleUserLogOut() {
        User.logOut()
            .then(() => navigate('/'));
    }

    return (
        <div className={style.wrapper}>

            <div className={style.user}>

                {
                    !User.isAuth &&
                    <>
                        <Link to={'login'}>
                            <div className={style.link}>login</div>
                        </Link>
                        <Link to={'registration'}>
                            <div className={style.link}>sign in</div>
                        </Link>
                    </>
                }

                {
                    User.isAuth &&
                    <>
                        <div className={style.link} onClick={handleUserLogOut}>logout</div>
                    </>
                }

                <UserSvg className={style.userSvg}/>
            </div>

        </div>
    );
};

export default observer(UserBar);
