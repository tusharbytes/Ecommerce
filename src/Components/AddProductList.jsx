import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToProduct, removeProduct } from '../feature/AddSlice';
import { toast, ToastContainer } from 'react-toastify';

function AddProductList() {
    const selectItem = useSelector((state) => state);
    const [quantity, setQuantity] = useState({})
    const dispatch = useDispatch()
    const [likedProducts, setLikedProducts] = useState([]);


    function quantitySum(quantity, price) {
        return quantity * price
    }

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("likedProducts") || "[]");
        setLikedProducts(storedProducts);
    }, [])



    const handleRemove = (id) => {
        if (likedProducts.includes(id)) {
            const updatedProducts = likedProducts.includes(id) && likedProducts.filter(ele => ele !== id);
            setLikedProducts(updatedProducts);
            localStorage.setItem("likedProducts", JSON.stringify(updatedProducts));
            dispatch(removeProduct(id))

            toast.success("Product delete Successfully")
        }
    };


    function handleQuantity(productId, addNum) {
        setQuantity((prev) => ({
            ...prev,
            [productId]: Math.max((prev[productId] || 1) + addNum)
        }))
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="grid grid-cols-1 gap-4">
                <h1 className='text-center text-6xl font-semibold'>Shopping Cart</h1>
                {selectItem.select?.selectItem ? (
                    selectItem.select?.selectItem.map((carts, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
                        >
                            <div className="col-span-12 lg:col-span-2 img box">
                                <img
                                    src={carts.image}
                                    alt={carts.title}
                                    className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                                />
                            </div>
                            <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                                <div className="flex items-center justify-between w-full mb-4">
                                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                                        {carts.title}
                                    </h5>
                                    <button onClick={() => handleRemove(carts.id)} className="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                                        <svg
                                            width="34"
                                            height="34"
                                            viewBox="0 0 34 34"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                                                cx="17"
                                                cy="17"
                                                r="17"
                                            />
                                            <path
                                                className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                                                d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                                stroke="#EF4444"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                                    {carts.description}

                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <button
                                            className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                                            onClick={() => handleQuantity(carts.id, -1)}
                                        >
                                            <svg
                                                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                width="18"
                                                height="19"
                                                viewBox="0 0 18 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.5 9.5H13.5"
                                                    stroke=""
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                        <input
                                            type="text"
                                            id="number"
                                            className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
                                            value={quantity[carts.id] || 1}
                                            readOnly
                                        />
                                        <button
                                            className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                                            onClick={() => handleQuantity(carts.id, 1)}
                                        >
                                            <svg
                                                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                width="18"
                                                height="19"
                                                viewBox="0 0 18 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.75 9.5H14.25M9 14.75V4.25"
                                                    stroke=""
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                                        ${quantitySum(quantity[carts.id] || 1, carts.price)}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <p className="text-xl text-gray-700 animate-bounce">Please Add to Cart....</p>
                     </div>
                )}
            </div>   <ToastContainer />
        </div>



    )
}

export default AddProductList
