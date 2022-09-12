import React from 'react';
import Disk from "../../components/disc/Disk";
import UploadFile from "../../components/UploadFile/UploadFile";

import style from './home.module.css';

const HomePage = () => {
    return (
        <div className={style.wrapper}>
            <Disk />
            <UploadFile />
        </div>
    );
};

export default HomePage;
