import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { moviesShow } from '../../feature/MoviesSlice'
import { HiOutlineHeart } from 'react-icons/hi'
import { selectMovie } from '../../feature/MovieSelectedSlice'

function MovieView() {

  const [selected, setSelected] = useState([])
  console.log(selected, "s;e;eeelelel")
  const get = useSelector((state) => state)
  


  const dispatch = useDispatch()

  const handleSelect = (product) => {
    setSelected((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev
      } else {
        const add = [...prev, product.id]
        dispatch(selectMovie(product))
        return add
      }
    })

  }

  useEffect(() => {
    dispatch(moviesShow())
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {get?.movies.getMovies.data?.map(movie => (
        <div key={movie.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className='flex justify-end p-5 text-4xl'>
            <button
              onClick={() => handleSelect(movie)}
            >
              <HiOutlineHeart className={`${selected.some(product => product == movie.id) ? "fill-red-600" : "fill-white"}`} />
            </button> </div>
          <img src={movie.poster_path} alt={movie.original_title} className="w-full h-64 object-contain" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{movie.original_title}</h2>
            <p className="text-sm text-gray-500">Release Date: {movie.release_date}</p>
            <p className="mt-2 text-gray-700">{movie.overview}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">Rating: {movie.vote_average}</span>
              <span className="text-sm text-gray-500">Votes: {movie.vote_count}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieView