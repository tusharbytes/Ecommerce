import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nabvar';
import AddProductList from './Components/AddProductList';
import Carts from './Components/carts/Carts';
import MovieView from './Components/movieView/MovieView';
import Photos from './Components/photos/Photos';
import SelectedMovie from './Components/movieView/SelectedMovie';

function App() {
  return (
    < BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/addProductList" element={<AddProductList />}></Route>
        <Route path="/products" element={<Carts />}></Route>
        <Route path="/movies" element={<MovieView />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
        <Route path="/selectedMovie" element={<SelectedMovie />}></Route>



       
      </Routes>

    </ BrowserRouter>
  );
}

export default App;
