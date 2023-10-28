import React from 'react'
import '../stylesheets/Header.scss'
import logo from '../assets/New Logo.png'
import img1 from '../assets/asset 1.svg'
import img2 from '../assets/asset 2.svg'
import img3 from '../assets/asset 16.svg'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <nav className="flex-center navbar container">
    <div className="flex-center logo">
        <img src={logo} alt="logo-photo"/>
    </div>
    <ul className="flex-center nav-list-item">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'dashboard'}>Dashboard</Link></li>
        <li><Link to="/">NFT</Link></li>
        <li><Link to={'/'}>Earn</Link></li>
        <li><Link to="/">Buy</Link></li>
        <li><Link to="/">Referrals</Link></li>
        <li><Link to="/">Ecosystem</Link></li>
        <li><Link to="/">About</Link></li>
    </ul>
    <div className="flex-center button-box">
        <button className='trade-btn'>Trade</button>
        <button>
            <img src={img1}/>
            Connect Wallet
        </button>
        <div className="flex-center btns">
           <button>
            <img src={img2} alt="photo"/>
           </button>
           <button>
           <img src={img3} alt="photo" />
           </button>
        </div>
    </div>
</nav>
  )
}

export default Header