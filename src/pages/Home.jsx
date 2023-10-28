import React from 'react'
import '../stylesheets/Home.scss'
import Mini_Card from '../components/Mini_Card';
import img4 from '../assets/asset 3.svg'
import img5 from '../assets/asset 4.svg'
import img6 from '../assets/asset 5.svg'
import img7 from '../assets/asset 6.svg'
import img8 from '../assets/asset 7.svg'
import img9 from '../assets/asset 8.svg'
import img10 from '../assets/asset 9.png'
import img11 from '../assets/asset 10.png'
import Card from '../components/Card';
const Home = () => {
  return (
   <main className='main flex-center'>
    <div className='first-section flex-center'>
    <h1>
    Decentralized
Perpetual Exchange
    </h1>
    <p>Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</p>
    <button>Launch Exchange</button>
    <div className='flex-center mini-card-box'>
        <Mini_Card img={img4} title={'Total Trading Volume'} price={'$0'} />
        <Mini_Card img={img5} title={'Open Interest'} price={'$0'} />
        <Mini_Card img={img6} title={'Total Users'} price={'0'} />
    </div>
    </div>
    <div className='last-section flex-center'>
    <div className='box flex-center'>
        <div className='box-content flex-center'>
            <div>
    <img src={img7} alt="photo" />
            <p>Reduce Liquidation Risks</p>
            </div>
            <p>
            An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.
            </p>
        </div>
        <div className='box-content flex-center'>
            <div>
                <img src={img8} alt="photo" />
                <p>Save on Costs</p>
            </div>
                <p>Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.</p>
        </div>
        <div className='box-content flex-center'>
            <div>
                <img src={img9} alt="photo" />
                <p>Simple Swaps</p>
            </div>
                <p>Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.</p>
        </div>
    </div>
    <div className='card-box flex-center'>
        <h2>
        Two tokens create our ecosystem
        </h2>
        <div className='flex-center'>

    <Card img={img10} title='$ROMI' description="$ROMI is the utility and governance token. Accrues 30% of the platform's generated fees."
    rate='Ethereum APR: 0.00%'
    />
    <Card img={img11} title='$ZLP' description="$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees." 
    rate='Ethereum APR: 1,652,139,850.77%'
    />
    </div>
    </div>
    </div>
   </main>
  )
}

export default Home