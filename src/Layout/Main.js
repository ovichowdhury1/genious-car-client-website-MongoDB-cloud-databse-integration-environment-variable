import React from 'react';
import Hedaer from '../pages/Shared/Header/Hedaer';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Hedaer></Hedaer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;