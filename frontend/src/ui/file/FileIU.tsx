import React from 'react';
import styles from './file.module.css'
import FolderSVG from "../../assets/svg/FolderSVG";
import FileSVG from "../../assets/svg/FileSVG";
import getShortDate from "../../utils/getShortDate";

export interface IFile {
    _id: string;
    name: string;
    type: 'dir' | '';
    size: string;
    date: string;
    callback?(): void;
}

const FileIU = ({_id, name, type, size, date, callback}: IFile) => {
    return (
        <div className={styles.wrapper} onClick={callback}>

            {
                type === 'dir'
                    ? <FolderSVG className={styles.icon}/>
                    : <FileSVG className={styles.icon}/>
            }

            <div className={styles.name}>{name}</div>
            <div className={styles.date}>{getShortDate(date)}</div>
            <div className={styles.size}>{size}</div>
        </div>
    );
};

export default React.memo(FileIU);
