import React, {useEffect, useState} from 'react';
import styles from './disk.module.css'
import {Button} from '../../ui/button/Button';
import FileList from "../fileList/FileList";
import {observer} from "mobx-react-lite";
import User from "../../mobx/user";
import {Modal} from "../../ui/modal/Modal";
import FormCreateDIr from "../formCreateDir/FormCreateDIr";
import {FileStorage} from "../../mobx/file";

const Disk = observer(() => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        FileStorage.getFilesFromApi();
    }, [])

    const handleReset = () => {
        FileStorage.clear();
    };

    const handleModalOpen = () => {
        setIsOpenModal(true);
    };

    const handleModalClose = () => {
        setIsOpenModal(false);
    };

    const handleModalSubmit = () => {
        setIsOpenModal(false);
    };

    if (!User.isAuth) return null

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttons}>
                <Button
                    className={styles.buttonBack}
                    textStyle={styles.buttonBackText}
                    onClick={handleReset}
                    text='Сбросить'
                />
                <Button
                    className={styles.buttonCreateNew}
                    textStyle={styles.buttonCreateNewText}
                    onClick={handleModalOpen}
                    text='Создать папку'
                />
            </div>

            {
                FileStorage.loading
                    ? <div>loading...</div>
                    : <FileList/>
            }

            {
                isOpenModal &&
                <Modal isOpen={isOpenModal} onCloseModal={handleModalClose}>
                    <Modal.Header>
                        <h2>Create new directory</h2>
                    </Modal.Header>
                    <Modal.Content>
                        <FormCreateDIr callback={handleModalClose}/>
                    </Modal.Content>
                    {/*<Modal.Footer*/}
                    {/*    buttonSubmitText="Choice"*/}
                    {/*    onSubmit={handleModalSubmit}*/}
                    {/*/>*/}
                </Modal>
            }

        </div>
    );
});

export default Disk;
