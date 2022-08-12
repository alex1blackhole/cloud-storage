import React, {useEffect, useRef, useState} from 'react';
import {Input} from "../../ui/input/Input";
import {Button} from "../../ui/button/Button";
import styles from './registration.module.css';
import {observer} from "mobx-react-lite";
import User from "../../mobx/user";
import {useNavigate} from "react-router-dom";

const UserAuth = observer(() => {
    let navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setData] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        inputRef?.current?.focus();
    }, [])

    useEffect(() => {
        setData({
            email: '',
            password: '',
        })
    }, [User.isAuth])

    const handleForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setData({
            ...form,
            [name]: value
        });

    }

    const handleSubmit = (event: any): void => {
        if (event) event.preventDefault()

        User.login(form.email, form.password)

        setTimeout(() => {
            navigate('/');
        }, 200)
    }

    if (User.isAuth) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.title}>Login was successful</div>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>User login</div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fields}>
                    <Input
                        placeholder='Email'
                        onChange={handleForm}
                        name="email"
                        ref={inputRef}
                    />
                    <Input
                        placeholder='Password'
                        onChange={handleForm}
                        name="password"
                        type='password'
                    />
                </div>
                <Button
                    text={'submit'}
                    className={styles.button}
                    textStyle={styles.buttonText}
                    onClick={handleSubmit}
                />
            </form>

        </div>
    );
});

export default UserAuth;
