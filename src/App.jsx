
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/pages/Login.jsx";
import Registr from "./components/pages/Registr.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/registr" element={<Registr/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
