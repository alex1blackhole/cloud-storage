import React, {useEffect, useRef, useState} from 'react';
import {Input} from "../../ui/input/Input";
import {Button} from "../../ui/button/Button";
import styles from './registration.module.css';
import apiRegistration from "../../api/auth/registration";

const UserRegistration = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })


    useEffect(() => {
        inputRef?.current?.focus();
    }, [])

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

        apiRegistration(form.email, form.password, form.firstName, form.lastName)
            .then( response => console.log(response))

    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Registration</div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fields}>
                    <Input
                        placeholder='First Name'
                        onChange={handleForm}
                        name="firstName"
                        ref={inputRef}
                    />
                    <Input
                        placeholder='Last Name'
                        onChange={handleForm}
                        name="lastName"
                    />
                    <Input
                        placeholder='Email'
                        onChange={handleForm}
                        name="email"
                    />
                    <Input
                        placeholder='Password'
                        onChange={handleForm}
                        name="password"
                    />
                </div>

                <Button
                    text={'Register'}
                    className={styles.button}
                    textStyle={styles.buttonText}
                    onClick={handleSubmit}
                />
            </form>

        </div>
    );
};

export default UserRegistration;
