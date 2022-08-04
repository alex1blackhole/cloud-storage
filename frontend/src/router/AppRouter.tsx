import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import UserRegistration from "../components/auth/UserRegistration";
import UserAuth from "../components/auth/UserAuth";

const AppRouter = () => {
    return (
        <Routes>

            <Route path='/registration' element={<UserRegistration/>}/>
            <Route path='/login' element={<UserAuth/>}/>

        </Routes>
    );
};

export default AppRouter;
