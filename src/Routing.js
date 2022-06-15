import React, { lazy, Suspense } from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

// const Dashboard = lazy(() => import("./pages/Fulfiller/Dashboard/Dashboard"));
  
export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Suspense fallback={<div></div>}>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/portfolio" element={<Portfolio/>}/>
                        <Route exact path="/about" element={<About/>}/>
                        <Route exact path="/contact" element={<Contact/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}
