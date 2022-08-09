import React, {useState} from 'react';
import {Input} from "../../ui/input/Input";
import {Button} from "../../ui/button/Button";
import {FileStorage} from '../../mobx/file'

import styles from './formCreateDir.module.css'

interface IForm {
    callback?: () => void
}

const FormCreateDIr = ({callback}: IForm) => {

    const [name, setName] = useState('');

    async function submit() {
        if (name.length === 0) return false
        await FileStorage.createNewDirectory(name)
            .then(() => setName(''))
            .then(() => {
                if (callback) callback()
            })
    }

    return (
        <div className={styles.wrapper}>
            <Input
                defaultValue={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                placeholder={'Введите название файла...'}
            />

            <Button
                textStyle={styles.buttonText}
                className={styles.button}
                text={'submit'}
                onClick={submit}
            />

        </div>
    );
};

export default FormCreateDIr;
