import React, {useEffect} from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import User from "./mobx/user";
import {ToastContainer} from 'react-toastify';
import style from './app.module.css'
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header/Header";

function App() {

    useEffect(() => {
        User.auth()
    }, [])

    return (
        <BrowserRouter>
            <div className={style.app}>
                <Navbar/>
               <div className={style.content}>
                   <Header />
                   <AppRouter/>
               </div>
                <ToastContainer limit={2} style={{
                    paddingTop: 90
                }}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
