import ReactDOM from 'react-dom/client'; 
import { BrowserRouter, Route, Routes }  from "react-router-dom";
import App from "./App";
import Success from './pages/Success';
import Fail from'./pages/Fail';
import './index.css'; // Or whatever your CSS file name is


  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/fail' element={<Fail/>}/>
    </Routes>
    </BrowserRouter>
  );



