import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Register from './Components/Register';
import Showdata from './Components/Showdata';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/s' element={<Showdata/>}/>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
