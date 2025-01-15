import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showPhotoes } from '../../feature/PhotoSlice'
import Loader from '../../common/Loader'

function Photos() {

    const dispatch = useDispatch()
    const photo = useSelector((state) => state)

    useEffect(() => {
        dispatch(showPhotoes())
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {
                photo.photo.loading  ? <Loader/> :
            
            photo.photo.photoGet.map(photo => (
                <div key={photo.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={photo.photo_url} alt={photo.caption} className="w-full h-64 object-contain" />
                    <div className="p-4">
                        <p className="text-sm text-gray-500">{photo.created_at}</p>
                        <h2 className="text-xl font-bold text-gray-800 mt-2">{photo.caption}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Photos