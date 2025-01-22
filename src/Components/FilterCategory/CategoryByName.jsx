import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CategoryByName() {
    const { categoryname } = useParams()
    const [category, setCategory] = useState([])
    console.log(category, "category")

    const getCategoryName = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryname}`)
        setCategory(response.data)
    }

    useEffect(() => {
        getCategoryName()
    }, [])

    return (
        <div className='max-w-7xl w-full mx-auto px-6 lg:px-8 py-6'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {category.map((product) => (
                <div key={product.id} className="max-w-xs rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <img className="w-full h-48 object-contain" src={product.image} alt={product.title} />
                    <div className="px-6 py-4 bg-white">
                        <div className="font-bold text-xl mb-2 text-gray-900">{product.title}</div>
                        <p className="text-gray-600 text-base">{product.description}</p>
                    </div>
                    <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
                    
                        <span className="text-gray-900 font-bold text-lg">${product.price}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    )   
}

export default CategoryByName