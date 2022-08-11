import React from 'react';
import {useLocation} from "react-router-dom";
import Disk from "../components/disc/Disk";

const Test = () => {

    let location = useLocation();

    return (
        <div>
            <Disk />
        </div>
    );
};

export default Test;
