import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const carts = useSelector((state) => state);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="bg-white shadow text-gray-900">
            {/* Navbar */}
            <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
                {/* Logo */}
                <div className="text-3xl font-bold">SmartShopper</div>

                {/* Default Menu for Larger Screens */}
                <div className="hidden md:flex items-center space-x-6 text-lg">
                    <Link to="/products" className="hover:text-teal-500 transition">
                        Products
                    </Link>
                    <Link to="/movies" className="hover:text-teal-500 transition">
                        Movies
                    </Link>
                    <Link to="/photos" className="hover:text-teal-500 transition">
                        Photos
                    </Link>
                    <Link to="/about" className="hover:text-teal-500 transition">
                        About
                    </Link>
                    <Link to="/selectedMovie" className="hover:text-teal-500 transition">
                        Selected Movies
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-2xl focus:outline-none"
                    >
                        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="    md:flex items-center space-x-4">
                    <Link
                        to="/addProductList"
                        className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-600 transition"
                    >
                        Carts →
                    </Link>
                    <button className="bg-teal-100 text-teal-600 px-3 py-2 rounded-full shadow hover:bg-teal-200 transition">
                        {carts?.select?.selectItem?.length || "0"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {showMenu && (
                <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full z-10">
                    <ul className="flex flex-col items-center space-y-4 py-6">
                        <li>
                            <Link
                                to="/products"
                                className="text-gray-700 hover:text-teal-500 transition"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/movies"
                                className="text-gray-700 hover:text-teal-500 transition"
                            >
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/photos"
                                className="text-gray-700 hover:text-teal-500 transition"
                            >
                                Photos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-gray-700 hover:text-teal-500 transition"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/selectedMovie"
                                className="text-gray-700 hover:text-teal-500 transition"
                            >
                                Selected Movies
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
