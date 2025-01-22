import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCarts } from '../../feature/CartSlice';
import { addRemoveToProduct } from '../../feature/AddSlice';
import { Link, useParams } from 'react-router-dom';
import { setSingleProduct } from '../../feature/SingleProductSlice/SingleProductSlice';
import { IoHeart } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import FilterCategories from '../FilterCategory/FilterCategories';

function Carts() {




  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.cartGet); // Assuming this structure is correct
  const [likedProducts, setLikedProducts] = useState([]);


  useEffect(() => {
    dispatch(GetCarts());
  }, [dispatch]);

  const handleSingleProduct = (product) => {
    dispatch(setSingleProduct(product));
  };


  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    setLikedProducts(storedProducts);
  }, [])

  const handleAddRemoveProduct = (product_id) => {
    const isProductLiked = likedProducts.includes(product_id.id);
    const updateCartProduct = likedProducts.includes(product_id.id)
      ? likedProducts.filter(item => item !== product_id.id) : [...likedProducts, product_id.id]
    setLikedProducts(updateCartProduct)
    localStorage.setItem("likedProducts", JSON.stringify(updateCartProduct))
    dispatch(addRemoveToProduct(product_id))

    if (isProductLiked) {
      toast.info(`    Removed from liked products.`, {
        position: "top-left",
        autoClose: 3000,
      });
    } else {
      toast.success(`  Added to liked products!`, {
        position: "top-left",
        autoClose: 3000,
      });
    }

  };



  return (
    <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 py-4">
      <FilterCategories/> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {carts.map((cart) => (
          <div
            key={cart.id}
            className="flex flex-col items-center border p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex">
              <Link to={`/viewsingleproduct/${cart.id}`} onClick={() => handleSingleProduct(cart)}>
                <img
                  src={cart.image}
                  alt={cart.title}
                  className="w-36 h-36 object-contain mb-4 rounded-md"
                />
              </Link>
              <button onClick={() => handleAddRemoveProduct(cart)} className="px-3 flex justify-center">
                <IoHeart className={`  text-3xl 
                  ${likedProducts?.includes(cart.id) ?
                    'text-red-700' : 'text-gray-400'
                  }`} />
              </button>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{cart.title}</h3>
            <p className="text-sm text-gray-600 text-center mb-3">{cart.description}</p>
            <span className="text-xl font-bold text-gray-900 mb-4">${cart.price}</span>
          </div>
        ))}
      </div>

      {carts.length === 0 && <div className='flex justify-center items-center  '>
        <p className='text-2xl animate-bounce flex justify-center font-semibold items-center'>Loading.....</p>
      </div>}
      <ToastContainer />
    </div>

  );
}

export default Carts;
