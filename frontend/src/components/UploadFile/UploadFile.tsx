import React from 'react';
import {Input} from "../../ui/input/Input";
import {useLocation} from "react-router-dom";
import FileUploadSVG from "../../assets/svg/FileUploadSVG";
import styles from './uploadFile.module.css';
import {observer} from "mobx-react-lite";
import {FileStorage} from "../../mobx/FileStorage";
import { isNumber } from '../../utils/definitions';

const UploadFile = observer(() => {

    let location = useLocation();

    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        FileStorage.uploadFiles([...event.target.files], location.pathname)
    };


    function getProgressText() {

        if(FileStorage.fileUploadingStatus) {
            return FileStorage.fileUploadingStatus
        }

        if (FileStorage.fileUploadingProgress && isNumber(FileStorage.fileUploadingProgress)) {

            if (FileStorage.fileUploadingProgress < 100) {
                return `Loading: ${FileStorage.fileUploadingProgress}`
            }


            if(FileStorage.fileUploadingProgress === 100) {
                return `File was successful uploaded, choose another file`
            }

        }

        return ''
    }


    return (
        <div className={styles.wrapper}>

            <div className={styles.loading}
                 style={{width: `${Number(FileStorage.fileUploadingProgress) ?? 0}%`}}>
                {getProgressText()}
            </div>


            <div className={styles.row}>
                <div className={styles.text}>Drag files here</div>
                <FileUploadSVG className={styles.svg}/>
            </div>

            <Input
                className={styles.input}
                type='file'
                multiple
                onChange={handleFileInput}
            />
        </div>
    );
});

export default UploadFile;