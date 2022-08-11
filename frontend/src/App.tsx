import React, {useEffect} from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import User from "./mobx/user";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    useEffect(() => {
        User.auth()
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <AppRouter/>
                <ToastContainer limit={2} style={{
                    paddingTop:90
                }}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
