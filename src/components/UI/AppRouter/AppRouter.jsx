import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../../../Pages/About";
import Items from "../../../Pages/Items";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/items" element={<Items/>} />
        </Routes>
    );
};

export default AppRouter;