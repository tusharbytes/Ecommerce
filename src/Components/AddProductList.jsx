import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function AddProductList() {
    const selectItem = useSelector((state) => state.select?.selectItem);

    const [quantity,setQuantity]= useState("")


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100"> {/* Full screen and center */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {selectItem && selectItem.length > 0 ? (
                    selectItem.map((cartS, index) => (
                        <div key={index} className="flex flex-col items-center border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={cartS.image}
                                alt={cartS.title}
                                className="w-36 h-36 object-contain mb-4 rounded-md"
                            />

                            <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{cartS.title}</h3>
                            <p className="text-sm text-gray-600 text-center mb-3">{cartS.description}</p>

                            <span className="text-xl font-bold text-gray-900 mb-4">${cartS.price}</span>
                            <div className='flex gap-5 border border-black rounded-xl '>
                                <button className='px-2 py-1 rounded-xl border   border-stone-950'>+</button>
                                <button className='px-2 py-1 rounded-xl border border-stone-950'>-</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-xl text-gray-700 animate-bounce">Please Add to Cart....</p>
                )}
            </div>
        </div>
    )
}

export default AddProductList
