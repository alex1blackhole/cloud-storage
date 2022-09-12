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
import Dashboard from "../pages/dashboard/dashboard";
import Settings from "../pages/settings/settings";

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
                    <Route path='/drive' element={<HomePage/>}/>
                    <Route path="/drive/folders/:name" element={<Disk />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                </>
            }

            <Route path="*" element={<NoMatch/>}/>

        </Routes>
    );
});

export default AppRouter;
