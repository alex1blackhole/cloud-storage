import React from 'react';
import styles from './fileList.module.css';
import {FileStorage} from '../../mobx/file'
import FileIU, {IFile} from "../../ui/file/FileIU";
import {observer} from "mobx-react-lite";

const FileList = observer(() => {

    const filesRender = FileStorage?.files.map( (file: IFile) =>
        <FileIU
            key={file._id}
            callback={ () => FileStorage.setCurrentDir(file)}
            {...file}
        />
    )

    const isEmpty = FileStorage?.files.length === 0;

    if(isEmpty) {
        return  (
            <div>
                You don't have any files and folders
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
