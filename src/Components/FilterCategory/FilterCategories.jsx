import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function FilterCategories() {
    ;
    const navigate = useNavigate()
    const [selectCategoryName, setSelectCategoryName] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const getCategoriesName = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/categories`);
            setSelectCategoryName(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleSelectCategory = (e) => {
        const selected = e.target.value;
        setSelectedCategory(selected);
        if (selected) {
            navigate(`/category/${selected}`);
        }
    };

    useEffect(() => {
        getCategoriesName();
    }, []);

    return (

        <div className='max-w-7xl w-full mx-auto px-6 lg:px-8 py-4'>
        <div className="grid grid-cols-3">
            <select 
                value={selectedCategory} 
                onChange={handleSelectCategory}
                className="block appearance-none py-2 px-4 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option value="">Select Category</option>
                {selectCategoryName.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    </div>
    
    );
}

export default FilterCategories;
