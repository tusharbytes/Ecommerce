import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function SelectedMovie() {


    const watch = useSelector((state) => state)
    console.log(watch.movieAdd, "watchfdsffsfsf  ")
    const [randomPrice, setRandomPrice] = useState(null)
    const price = [21, 45, 8, 2, 82, 8, 6, 8, , 9, 76, 6, 54, 8, 52, 69, 5, 854, 64, 65415, 6, 46, 485, 564, 8, 4, 48, , 845, 8, 458, 5, 4, 5586]


    const randomNumber = () => {
        const pickRandom = Math.floor(Math.random() * price.length)
        setRandomPrice(pickRandom)
    }
    useEffect(() => {
        randomNumber()
    }, [])

    return (
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 p-3 gap-4'>
            {watch.movieAdd.movieCart.map((ele) => (
                <div key={ele.id} className="bg-white  flex flex-col sm:flex-row gap-4 p-5 border rounded-lg shadow-lg overflow-hidden">
                    <img src={ele.poster_path} alt={ele.original_title} className="w-full h-64 object-contain sm:w-1/3 sm:h-auto" />
                    <div className="p-4 sm:w-2/3">
                        <h2 className="text-xl font-bold text-gray-800">{ele.original_title}</h2>
                        <p className="text-sm text-gray-500">Release Date: {ele.release_date}</p>
                        <p className="mt-2 text-gray-700 line-clamp-3">{ele.overview}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-800">Rating: {ele.vote_average}</span>
                            <span className="text-sm text-gray-500">Votes: {ele.vote_count}</span>
                        </div>

                        <div className="py-3   sm:flex-row justify-center items-center">
                            <p className="font-semibold text-center py-3 sm:py-0">${randomPrice}</p>

                            <button className="px-5 py-3 w-full   rounded-xl bg-green-500 hover:bg-green-600 text-white">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default SelectedMovie