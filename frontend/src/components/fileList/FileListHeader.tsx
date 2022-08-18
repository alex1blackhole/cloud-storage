import React from 'react';
import styles from "./fileList.module.css";

const FileListHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.name}>Название</div>
            <div className={styles.date}>дата</div>
            <div className={styles.size}>размер</div>
        </div>
    );
};

export default FileListHeader;
