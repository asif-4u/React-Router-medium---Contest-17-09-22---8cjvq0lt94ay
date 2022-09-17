import React from 'react'

import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
import { Calculator } from './Pages/Calculator'
import { Index } from './Pages/Index'
import{Routes,Route} from "react-router-dom"

export const AppRoutes = () =>{
    return (
        <Routes>
        <Route path="/element={<index/>}/>
        <Route path="/backgroundColorChanger />}/>
        <Route path="/calculator" element={<Calculator />}/>
        </Routes>

    )
}
