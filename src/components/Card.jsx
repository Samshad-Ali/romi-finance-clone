import React from 'react'

const Card = ({title,img,description,rate}) => {
  return (
    <div className='card flex-center'>
        <div className='upper flex-center'>
            <img src={img} alt="photo" />
            <p>{title}</p>
        </div>
        <div className='middle flex-center'>
            <p className='description'>
            {description}
            </p>
            <p>{rate}</p>
        </div>
        <div className='lower flex-center'>
            <button className='buy-btn'>Buy</button>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default Card