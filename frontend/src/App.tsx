import React, {useEffect} from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import User from "./mobx/user";

function App() {

    useEffect(() => {
        User.auth()
    },[])

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
