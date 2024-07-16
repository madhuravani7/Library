import React from 'react'
import loader from '../../images/loader.svg'
import './Loader.scss'
const Loader = () => {
  return (
    <div className="loader flex flex-c">
        <img src={loader} alt="loader" />
    </div>
  )
}

export default Loader