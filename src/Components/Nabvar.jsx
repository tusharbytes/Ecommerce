import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const carts = useSelector((state) => state)



    return (
        <div className="bg-cream     text-gray-900">
            {/* Navbar */}
            <div className="max-w-7xl   w-full  mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
                {/* Logo */}
                <div className="text-3xl font-bold">SmartShopper </div>

                {/* Links */}
                <div className="hidden md:flex space-x-6 text-lg">

                    <Link to={"/products"} className="hover:text-gray-600">Products</Link>
                    <Link to={"/movies"} className="hover:text-gray-600">Movies</Link>
                    <Link to={"/photos"} className="hover:text-gray-600">Photos</Link>
                    <Link className="hover:text-gray-600">About</Link>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex items-center space-x-4">
                    <Link to={"/addProductList"} className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-600">
                        Carts →
                    </Link>
                    <button className="bg-teal-100 text-teal-600 px-3 py-2 rounded-full shadow hover:bg-teal-200">
                        {carts?.select?.selectItem?.length == 0 ? "0" : carts?.select?.selectItem?.length}
                    </button>
                </div>
            </div>
            {/* <  AddProductList/> */}
            {/* Hero Section */}
            <div className="text-center mt-10">

            </div>
        </div>
    );
};

export default Navbar;
