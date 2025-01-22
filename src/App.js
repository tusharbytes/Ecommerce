import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nabvar';
import AddProductList from './Components/AddProductList';
import Carts from './Components/carts/Carts';
import MovieView from './Components/movieView/MovieView';
import Photos from './Components/photos/Photos';
import SelectedMovie from './Components/movieView/SelectedMovie';
import SingleProductView from './Components/singleProductView/SingleProductView';
import FilterCategories from './Components/FilterCategory/FilterCategories';
import CategoryByName from './Components/FilterCategory/CategoryByName';

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
        <Route path="/viewsingleproduct/:id" element={<SingleProductView />}></Route>
        <Route path="/categories" element={<FilterCategories />}></Route>
        <Route path="/category/:categoryname" element={<CategoryByName />}></Route>







      </Routes>

    </ BrowserRouter>
  );
}

export default App;
