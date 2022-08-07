import React, {useEffect} from 'react';
import styles from './disk.module.css'
import {Button} from '../../ui/button/Button';
import FileList from "../fileList/FileList";
import FileStorage from '../../mobx/file'
import {observer} from "mobx-react-lite";
import User from "../../mobx/user";

const Disk = observer(() => {

    useEffect(() => {
        FileStorage.getFilesFromApi();
    }, [])

    if (!User.isAuth) return null

    if (FileStorage.loading) return <div>loading...</div>

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttons}>
                <Button className={styles.buttonBack} textStyle={styles.buttonBackText} text='Поделиться'/>
                <Button className={styles.buttonCreateNew} textStyle={styles.buttonCreateNewText} text='Создать папку'/>
            </div>

            <FileList/>

        </div>
    );
});

export default Disk;
