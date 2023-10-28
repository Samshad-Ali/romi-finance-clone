import React from "react";
import img17 from "../assets/ic_avalanche_24.4f4088f4.svg";
import img10 from "../assets/asset 9.png";
import img11 from "../assets/asset 10.png";
import "../stylesheets/Dashboard.scss";
import { FaAngleDown } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="dashboard flex-center">
      <div className="first-section flex-center">
      <div className="heading flex-center">
        <div className="flex-center">
          <h2>Stats</h2>
          <img src={img17} alt="photo" />
        </div>
        <p>Ethereum Total Stats start from 06 Jan 2022. For detailed stats:</p>
      </div>
      <div className="dashboard-box flex-center">
        <div className="dashboard-card flex-center">
          <p>Overview</p>
          <ul className="flex-center">
            <li>
              <span>AUM</span>
              <span>$33</span>
            </li>
            <li>
              <span>$ZLP Pool</span>
              <span>$33</span>
            </li>
            <li>
              <span>24h Volume</span>
              <span>$0</span>
            </li>
            <li>
              <span>AUM</span>
              <span>$33</span>
            </li>
            <li>
              <span>Long Positions</span>
              <span>$0</span>
            </li>
            <li>
              <span>Short Positions</span>
              <span>$0</span>
            </li>
          </ul>
        </div>
        <div className="dashboard-card flex-center">
          <p>Total Stats</p>
          <ul className="flex-center">
            <li>
              <span>Total Fees</span>
              <span>$0</span>
            </li>
            <li>
              <span>Total Volume</span>
              <span>$0</span>
            </li>
            <li>
              <span>Floor Price Fund</span>
              <span style={{ border: "none" }}>$621,752</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="heading flex-center">
        <div className="flex-center">
          <h2>Tokens</h2>
          <img src={img17} alt="photo" />
        </div>
        <p>Platform and $ZLP index tokens.</p>
      </div>
      <div className="dashboard-box-second flex-center">
        <div className="dashboard-card-second flex-center">
          <div className="left-side flex-center">
            <div className="flex-center">
              <img src={img10} alt="" />
              <p className="flex-center">
                $ROMI
                <span>$ROMI</span>
              </p>
              <span>
                <FaAngleDown />
              </span>
            </div>
            <ul className='flex-center'>
      <li> 
        <span>Price</span>
        <span>$0.00</span>
         </li>
      <li> 
        <span>Supply</span>
        <span>10,000 $ZOMI</span>
         </li>
      <li> 
        <span>Total Staked</span>
        <span>$0</span>
         </li>
      <li> 
        <span>Market Cap</span>
        <span>$10</span>
         </li>
    </ul>
          </div>
    <div className="right-side flex-center">
        <div className="chart flex-center">
                    <div className="flex-center">
          <p>
          Distribution
          </p>
          </div>
        </div>
    </div>
        </div>
        <div className="dashboard-card-second flex-center">
          <div className="left-side flex-center">
            <div className="flex-center">
              <img src={img11} alt="photo" />
              <p className="flex-center">
                $$ZLP
                <span>$ZLP</span>
              </p>
              <span>
                <FaAngleDown />
              </span>
            </div>
            <ul className='flex-center'>
      <li> 
        <span>Price</span>
        <span>$1.139</span>
         </li>
      <li> 
        <span>Supply</span>
        <span>
29 $ZL</span>
         </li>
      <li> 
        <span>Total Staked</span>
        <span>$34</span>
         </li>
      <li> 
        <span>Market Cap</span>
        <span>$34</span>
         </li>
      <li> 
        <span>Stablecoin Percentage</span>
        <span>49.50%
</span>
         </li>
    </ul>
          </div>
    <div className="right-side flex-center">
        <div className="chart flex-center">
          <div className="flex-center">
          <p>
          $ZLP Pool
          </p>
          </div>
        </div>
    </div>
        </div>
      </div>
        </div>
        <div className="last-section flex-center">
          
   </div>
    </div>
  );
};

export default Dashboard;
