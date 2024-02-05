import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Karina from "../pages/Karina";
import Ninnin from "../pages/Ninnin";
import Winter from "../pages/Winter";
import Jigel from "../pages/Jigel";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'element = {<Home />} />
                <Route path='Karina' element = {<Karina />} />
                <Route path='Ninnin' element = {<Ninnin />} />
                <Route path='Winter' element = {<Winter />} />
                <Route path='Jigel/:id' element = {<Jigel />} />


            </Routes>
        </BrowserRouter>
        
    )
}

export default Router