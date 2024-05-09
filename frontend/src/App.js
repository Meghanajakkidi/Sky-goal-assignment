
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Signup from './pages/Signup';
import Login from './pages/Login';
import User from './pages/User';


function App() {
  
  return (
    <div className="App">
     
      <BrowserRouter>
     <Routes>
      <Route path="" element={<Signup/>}></Route>
      <Route path="login" element={<Login/>}></Route>
       <Route path='user' element={<User/>}></Route>
       
      
        </Routes>
        </BrowserRouter>
       
    </div>
   
  );
}

export default App;
