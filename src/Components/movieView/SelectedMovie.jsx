import React from 'react'
import { useSelector } from 'react-redux'

function SelectedMovie() {


    const watch = useSelector((state) => state)
    console.log(watch, "watch")

    return (
        <div>SelectedMovie</div>
    )
}

export default SelectedMovie