import React from 'react'
import Loader from '../assets/img/progress-circle_hero_2x.gif'

function Loading() {
    return (
        <div className="loading">
            <img src={Loader} alt="loader" />
        </div>
    )
}

export default Loading
