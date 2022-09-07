import React from 'react';
import styles from './file.module.css'
import FolderSVG from "../../assets/svg/FolderSVG";
import FileSVG from "../../assets/svg/FileSVG";
import getShortDate from "../../utils/getShortDate";
import {Button} from "../button/Button";

export interface IFile {
    childs: any;
    _id: string;
    name: string;
    type: 'dir' | '';
    size: string;
    date: string;

    callback?(): void;

    handleDownload(event: React.MouseEvent,fileId: string, fileName: string): void;

    handleDelete(event: React.MouseEvent): void;
}

const FileIU = ({_id, name, type, size, date, callback, handleDownload, handleDelete}: IFile) => {
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


            {
                type !== 'dir' &&
                <Button
                    onClick={ (event) => handleDownload(event, _id, name)}
                    className={`${styles.button} ${styles.download}`}
                    text={'download'}
                    type={"button"}
                />
            }


            <Button
                onClick={ (event) => handleDelete(event)}
                className={`${styles.button} ${styles.delete}`}
                text={'delete'}
                type={"button"}
            />

        </div>
    );
};

export default React.memo(FileIU);
