import React from 'react'
import logo from '../assets/New Logo.png'
import img12 from '../assets/asset 13.svg'
import img13 from '../assets/asset 14.svg'
import img14 from '../assets/asset 15.svg'
import img15 from '../assets/asset 11.svg'
import img16 from '../assets/asset 12.svg'
import '../stylesheets/Footer.scss'
const Footer = () => {
  return (
    <footer className='footer flex-center'>
        <img src={logo} alt="logo" />
      <ul className='flex-center'>
        <li>
          <img src={img15} alt="photo" />
        </li>
        <li>
          <img src={img16} alt="photo" />
        </li>
        <li>
          <img src={img12} alt="photo" />
        </li>
        <li>
          <img src={img13} alt="photo" />
        </li>
        <li>
          <img src={img14} alt="photo" />
        </li>
      </ul>
      <div className='flex-center'>
        <li>
        Terms and Conditions
        </li>
        <li>
        Referral Terms
        </li>
        <li>
       Media Kit
        </li>
      </div>
    </footer>
  )
}

export default Footer