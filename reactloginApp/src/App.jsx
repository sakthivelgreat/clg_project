import StatsCheckpoint from "./Homepage";
import LoginPage from "./Pages/LoginPage";

import { BrowserRouter,Route,Routes } from "react-router-dom";
import RegisterPage from "./registerPage";


function App() {
  return (
    <div style={{backgroundColor:'#2C3038'}}>
      <BrowserRouter>
        <Routes>          
          <Route  path="/" element={<RegisterPage/> } />
          <Route  path="/login" element={<LoginPage/> } />
          <Route  path="/Home" element={ <StatsCheckpoint/> } />

      
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App