import React, { useEffect, useState } from 'react'
import { BsHeart } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addRemoveToProduct, addToProduct } from '../../feature/AddSlice'
import axios from 'axios'

function SingleProductView() {
  const { id } = useParams();
  const p_id = Number(id);
  const ProductId = localStorage.getItem("likedProducts")
  const [product, setProduct] = useState({})
  const [likedProducts, setLikedProducts] = useState([]);
  const dispatch = useDispatch()

  const getProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProduct(response.data)
  }

  useEffect(() => {
    getProduct()
    const storedProducts = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    setLikedProducts(storedProducts);
  }, [])


  const handleAddRemoveProduct = (product) => {
    const updatedProducts = likedProducts.includes(p_id) ? likedProducts.filter(ele => ele !== p_id) : [...likedProducts, p_id];
    setLikedProducts(updatedProducts);
    dispatch(addRemoveToProduct(product))
    localStorage.setItem("likedProducts", JSON.stringify(updatedProducts));
  };





  return (
    <div className="border max-w-7xl w-full mx-auto px-6 lg:px-8 py-4 ">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 py-8 flex flex-col p-4 lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0">
        {/* Left Side: Image and Heart Button */}
        <div className="w-full lg:w-1/2 relative rounded-lg overflow-hidden">
          <img
            className="w-[650px] h-[550px] object-contain"
            src={product.image}
            alt={product.title}
          />
          <div className={`absolute top-4 right-4 w-8 h-8 text-red-400 bg-transparent border-2 border-gray-300 rounded-full flex items-center   justify-center hover:bg-gray-100 transition duration-200 ease-in-out ${ProductId}`}>
            <button
              // onClick={() => {
              //   if (!ProductId) {
              //     addToCart()
              //   } else {
              //     handleUnLike(product.id)
              //   }
              // }}
              onClick={() => { handleAddRemoveProduct(product) }}
            >
              <FaHeart
                className={`text-gray-700 hover:text-red-500 transition duration-200 ease-in-out ${likedProducts.includes(product.id)
                  ? "fill-red-700"
                  : "fill-slate-400"
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Right Side: Product Information */}
        <div className="w-full lg:w-1/2 px-6 py-4 flex flex-col justify-between space-y-4">
          <div className="font-bold text-xl text-gray-900">{product.title}</div>
          <p className="text-gray-600 text-base">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 text-lg font-semibold">${product.price}</span>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>




  );
};



export default SingleProductView