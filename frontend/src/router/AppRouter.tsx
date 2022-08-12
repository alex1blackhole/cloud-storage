import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import UserRegistration from "../components/auth/UserRegistration";
import UserAuth from "../components/auth/UserAuth";
import NoMatch from "../ui/NoMatch/NoMatch";
import HomePage from "../pages/home/HomePage";
import User from "../mobx/user";
import Disk from "../components/disc/Disk";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    return (
        <Routes>

            <Route path='/' element={<HomePage/>}/>

            {
                !User.isAuth &&
                <>
                    <Route path='/registration' element={<UserRegistration/>}/>
                    <Route path='/login' element={<UserAuth/>}/>
                </>
            }

            {
                User.isAuth &&
                <>
                    <Route path='/drive' element={<Disk/>}/>
                    <Route path="/drive/folders/:name" element={<Disk />} />
                </>
            }

            <Route path="*" element={<NoMatch/>}/>

        </Routes>
    );
});

export default AppRouter;
