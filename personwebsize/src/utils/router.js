import React from 'react';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import { Routes, Route } from 'react-router-dom';

const MyRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

    </Routes>
);

export default MyRouter;
