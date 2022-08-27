import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'exact element={<Home/>} />
        <Route path='/login'exact element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
