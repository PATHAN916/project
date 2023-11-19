import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
 
    <BrowserRouter>
   <Routes>
<Route path="/" element={<SignUp></SignUp>}>signup</Route>
<Route path="/Login" element={<Login></Login>}>Login</Route>
<Route path="/home" element={<Home/>}></Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
