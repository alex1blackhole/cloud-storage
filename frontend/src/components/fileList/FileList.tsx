import React from 'react';
import styles from './fileList.module.css';
import FileStorage from '../../mobx/file'
import File, {IFile} from "../../ui/file/file";
import {observer} from "mobx-react-lite";

const FileList = observer(() => {

    const filesRender = FileStorage?.files.map( (file: IFile) => <File key={file._id} {...file} /> )

    const isEmpty = FileStorage?.files.length === 0;


    if(isEmpty) {
        return  (
            <div>
                You don't have files and folders
            </div>
        )
    }

    return (
        <div>

            <div className={styles.header}>

                <div className={styles.name}>Название</div>
                <div className={styles.date}>дата</div>
                <div className={styles.size}>размер</div>

            </div>

            {filesRender}

        </div>
    );
});

export default FileList;
