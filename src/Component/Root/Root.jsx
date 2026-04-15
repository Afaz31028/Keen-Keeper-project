import React from 'react';
import Navbar from '../HomePage/Navbar';
import { Outlet } from 'react-router';
import Footer from '../HomePage/Footer';

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;