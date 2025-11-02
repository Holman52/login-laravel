import { useState } from 'react'

import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/pages/Login.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
