import React from 'react'

const Mini_Card = ({title,price,img}) => {
  return (
    <div className='mini-card flex-center'>
        <img src={img} alt="photo" />
        <div>
            <p>
                {title}
            </p>
            <span>
                {price?price:''}
            </span>
        </div>
    </div>
  )
}

export default Mini_Card