import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCarts } from '../../feature/CartSlice'
import { addToProduct } from '../../feature/AddSlice'

function Carts() {

  const dispatch = useDispatch()

  const carts = useSelector((state) => state)

  const [productQuantity,setProductQuantity ] = useState()


  useEffect(() => {
    dispatch(GetCarts())
  }, [])

  const handleAddCart = (item) => {
    dispatch(addToProduct(item))


    const quantity = carts.cart.cartGet.filter(count => count.id === item.id  );

    console.log(quantity, "quantity")


  }



  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {carts.cart.cartGet.map((cartS, index) => (
        <div key={index} className="flex flex-col items-center border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={cartS.image}
            alt={cartS.title}
            className="w-36 h-36 object-contain mb-4 rounded-md"
          />

          <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{cartS.title}</h3>
          <p className="text-sm text-gray-600 text-center mb-3">{cartS.description}</p>

          <span className="text-xl font-bold text-gray-900 mb-4">${cartS.price}</span>
          <button
            onClick={() => handleAddCart(cartS)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Add to Cart
          </button>
        </div>
      ))}
    </div>

  );
};



export default Carts