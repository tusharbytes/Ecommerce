import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nabvar';
import AddProductList from './Components/AddProductList';
import Carts from './Components/carts/Carts';

function App() {
  return (
    < BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/addProductList" element={<AddProductList />}></Route>
        <Route path="/products" element={<Carts />}></Route>

       
      </Routes>

    </ BrowserRouter>
  );
}

export default App;
