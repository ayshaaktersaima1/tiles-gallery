import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import ScrollToTop from '@/components/shared/ScrollToTop';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const layout = ({ children }) => {
    return (
        <div>

            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default layout;