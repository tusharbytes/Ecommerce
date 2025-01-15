import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCarts } from '../../feature/CartSlice'
import { addToProduct } from '../../feature/AddSlice'
import { FaHeart } from 'react-icons/fa'
import { HiOutlineHeart } from 'react-icons/hi'

function Carts() {

  const dispatch = useDispatch()

  const carts = useSelector((state) => state)
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    dispatch(GetCarts())
  }, [])

  // const handleAddCart = (product) => {
  //   setCartProducts((prev) => {
  //     if (prev.some((item) => item.id == product.id)) {
  //       return prev;
  //     }
  //     else{
  //       return [...prev, product];
  //     }
  //   })
  //   dispatch(addToProduct(cartProducts))
  // }

  const handleAddCart = (product) => {
    setCartProducts((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      } else {
        const updatedProducts = [...prev, product];
        dispatch(addToProduct({ cartProducts: updatedProducts })); // Dispatch only after ensuring the product is unique
        return updatedProducts;
      }
    });
  };

  return (
    <div className='grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {carts.cart.cartGet.map((carts, index) => (
        <div key={index} className="flex flex-col items-center border p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className='flex '>
            <img
              src={carts.image}
              alt={carts.title}
              className="w-36 h-36 object-contain mb-4 rounded-md"
            />

            <button onClick={() => handleAddCart(carts)}
              className="  flex     px-3">
              <HiOutlineHeart className={`${cartProducts.find(cartProduct => cartProduct.id === carts.id)
                ? "fill-red-600 border-white text-2xl"
                : " text-2xl "
                }`} >

              </HiOutlineHeart >

            </button>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{carts.title}</h3>
          <p className="text-sm text-gray-600 text-center mb-3">{carts.description}</p>

          <span className="text-xl font-bold text-gray-900 mb-4">${carts.price}</span>

        </div>
      ))}
    </div>

  );
};



export default Carts