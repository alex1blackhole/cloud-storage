import React from 'react';
import styles from './file.module.css'
import FolderSVG from "../../assets/svg/FolderSVG";
import FileSVG from "../../assets/svg/FileSVG";
import getShortDate from "../../utils/getShortDate";

export interface IFile {
    _id: number;
    name: string;
    type: string;
    size: string;
    date: string;
}

const File = ({_id, name, type, size, date}: IFile) => {
    return (
        <div className={styles.wrapper}>

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

export default React.memo(File);
