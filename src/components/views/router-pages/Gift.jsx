import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import moon from '../../assets/images/moon-solid.svg'
import user from '../../assets/images/user-solid.svg'
import bookmark from '../../assets/images/bookmark-solid.svg'
import gift from '../../assets/images/gifts-solid.svg'
import crow from '../../assets/images/crow-solid.svg'
import gas from '../../assets/images/gas-pump-solid.svg'
import caution from '../../assets/images/exclamation-triangle-solid.svg'
import googlePlay from '../../assets/images/google_play_store-836027fba5bce52aa7f436d7edf8fadf2707c7607842f994e3af58748ef141a0.svg'
import appleStore from '../../assets/images/apple_app_store-2b96ff447647976493b4622a5af700da687ffb28b64e3bd8c9c1bbd7ac20d028.svg'
import candy from '../../assets/images/candy-cane-solid.svg'
import rewardBanner from '../../assets/images/Rewards_Banner.webp'
import rewardCg from '../../assets/images/rewards_cg_store.webp'
import rewardHtd from '../../assets/images/rewards_htd.webp'
import sandBox from '../../assets/images/CG_x_The_Sandbox_.gif' 
import premium from '../../assets/images/fully_redeemed-4cfd792dec8dcf269ada3899d5fc7398f9965109ad8ffd5b1772ff57d8d2913a.svg'
import delphi from '../../assets/images/delphi.webp'
import cryptoQuant from '../../assets/images/cryptoquant.webp'
import intoTheBlock from '../../assets/images/intotheblock.webp'
import chain from '../../assets/images/chain.webp'
import surfShark from '../../assets/images/surfshark.webp'
import blockPit from '../../assets/images/blockpit.webp'
import theBlock from '../../assets/images/theblock.webp'
import zenLedger from '../../assets/images/zenledger.webp'
import shieldFolio from '../../assets/images/shieldfolio.webp'
import expressVPN from '../../assets/images/expressvpn.webp'
import pureVPN from '../../assets/images/purevpn.webp'
import defiant from '../../assets/images/defiant.webp'
import blockchain from '../../assets/images/blockchain.webp'
import nordVPN from '../../assets/images/nordvpn.webp'
import lockTrip from '../../assets/images/locktrip.webp' 
import travala from '../../assets/images/travala.webp'
import ballet from '../../assets/images/ballet.webp'
import blockchainKicks from '../../assets/images/blockchain-kicks.webp'
import keystone from '../../assets/images/keystone.webp'


function Gift() {
    const [darkMode, setDarkMode] = useState(false);
    const [userHover, setUserHover] = useState(false)
    const [security, setSecurity] = useState(false)
    const [subscription, setSubscription] = useState(false)
    const [rewards, setRewards] = useState(false)
    const [myCandies, setMyCandies] = useState(true)
    const [candyCount, setCandyCount] = useState(0)
    const [showGrid, setShowGrid] = useState(true)
    const [myRewards, setMyRewards] = useState(false)
    const [resourcesHover, setResourcesHover] = useState(false)
    const [productsHover, setProductsHover] = useState(false)
    const [communityHover, setCommunityHover] = useState(false)

    const handleSecurity = () => {
        setSecurity(true)
        setSubscription(false)
        setRewards(false)
        setMyCandies(false)
    }

    const handleSub = () =>{
        setSecurity(false)
        setSubscription(true)
        setRewards(false)
        setMyCandies(false)
    }

    const handleRewards = () =>{
        setSecurity(false)
        setSubscription(false)
        setRewards(true)
        setMyCandies(false)
    }

    const handleCandies = () =>{
        setSecurity(false)
        setSubscription(false)
        setRewards(false)
        setMyCandies(true)
    }

    const gridImages = [
        {
            id: 1,
            img: rewardBanner,
            text: 'How To Bitcoin book',
            candies: '800 candies'
        },
        {
            id: 2,
            img: rewardCg,
            text: '$10 off CoinCrow Swags',
            candies: '800 candies'
        },
        {
            id: 3,
            img: rewardHtd,
            text: 'How To Defi book',
            candies: '800 candies'
        },
        {
            id: 4,
            img: sandBox,
            text: 'CoinCrow X Sandbox NFT Giveaway',
            candies: '200 candies'
        },
        {
            id: 5,
            img: premium,
            text: '$5 off CoinCrow Premium',
            candies: '150 candies'
        },
        {
            id: 6,
            img: delphi,
            text: '20% off Delphi Digital Monthly & Annual Subsriptions',
            candies: '300 candies'
        },
        {
            id: 7,
            img: cryptoQuant,
            text: "20% off CryptoQuant's Advanced Plan",
            candies: '300 candies'
        },
        {
            id: 8,
            img: intoTheBlock,
            text: "40% off IntoTheBlock's Annual Subscription Plan",
            candies: '300 candies'
        },
        {
            id: 9,
            img: chain,
            text: "10% off Chain 2 Frame - NFT Optimized Displays",
            candies: '300 candies'
        },
        {
            id: 10,
            img: surfShark,
            text: "24 Months + Free 3 Months Surfshark VPN's Subscription",
            candies: '300 candies'
        },
        {
            id: 11,
            img: blockPit,
            text: "10% off Blockpit Cryptotax Plans",
            candies: '300 candies'
        },
        {
            id: 12,
            img: theBlock,
            text: "20% off The Block's Annual Subscription Plan",
            candies: '300 candies'
        },
        {
            id: 13,
            img: zenLedger,
            text: "10% off ZenLedger Crypto Tax Plan",
            candies: '300 candies'
        },
        {
            id: 14,
            img: shieldFolio,
            text: "20% OFF Shieldfolio Products",
            candies: '300 candies'
        },
        {
            id: 15,
            img: expressVPN,
            text: "12 Months + FREE 3 Months ExpressVPN's Annual Subscription",
            candies: '300 candies'
        },
        {
            id: 16,
            img: pureVPN,
            text: "70% Off on PureVPN 2 Years Plan",
            candies: '300 candies'
        },
        {
            id: 17,
            img: defiant,
            text: "20% off The Defiant's Monthly & Annual Subscriptions",
            candies: '300 candies'
        },
        {
            id: 18,
            img: blockchain,
            text: "10% off Blockchain Stuff Products",
            candies: '300 candies'
        },
        {
            id: 19,
            img: nordVPN,
            text: "18% off NordVPN Teams' Yearly Advanced Plan",
            candies: '300 candies'
        },
        {
            id: 20,
            img: lockTrip,
            text: "6% Off on your first Hotel Booking with LockTrip.com",
            candies: '300 candies'
        },
        {
            id: 21,
            img: travala,
            text: "$10 off Travala.com - Hotel & Home Booking",
            candies: '300 candies'
        },
        {
            id: 22,
            img: ballet,
            text: "Get 10% off Ballet Wallets",
            candies: '150 candies'
        },
        {
            id: 22,
            img: blockchainKicks,
            text: "10% off Blockchain Kicks Products",
            candies: '300 candies'
        },
        {
            id: 24,
            img: keystone,
            text: "15% Off Keystone Hardware Wallets",
            candies: '400 candies'
        }
    ]

    return (
        <div style={{backgroundColor: darkMode ? '#252526' : '#fff', color: darkMode ? '#fff' : '#000' }}>
            <section>
                <div className='nav-bar'>
                    <div className="top-nav">
                        <Link to='/subscription-plans'>
                            <input type='button' className='top-nav-button' value= 'Subscribe' />
                        </Link>
                        <ul className='top-nav-ul'>
                            <Link to='/help' style={{textDecoration: 'none', color: 'inherit'}}>
                                <li style={{fontSize: '12px'}}>Help</li>
                            </Link>
                            <li> <img src={gift} alt='gift' className='top-nav-ul-img2' /> </li>
                            <li> <img src={bookmark} alt='bookmark' className='top-nav-ul-img1' /> </li>
                            <li onMouseOver={() => setUserHover(true)} onMouseOut={()=> setUserHover(false)}> 
                                <img src={user} alt='user' className='top-nav-ul-img' /> 
                            </li>
                            <li> <img src={moon} alt='moon' className='top-nav-ul-img' onClick={() => setDarkMode(!darkMode)} /> </li>
                        </ul>
                    </div>
                    <div className="user-hover" style={{display: userHover ? 'block' : 'none', backgroundColor: darkMode ? '#252526' : '#fff'}} onMouseOver={() => setUserHover(true)} onMouseOut={()=> setUserHover(false)}>
                        <Link to='/portfolio' style={{textDecoration: 'none', color: 'inherit'}}>
                            <p>Portfolio <span><b>New</b></span></p>
                        </Link>
                        <Link to='/price-alert' style={{textDecoration: 'none', color: 'inherit'}}>
                            <p>Price Alert</p>
                        </Link>
                        <Link to='/security' style={{textDecoration: 'none', color: 'inherit'}}>
                            <p>Login and Security</p>
                        </Link>
                        <Link to='/subscription' style={{textDecoration: 'none', color: 'inherit'}}>
                            <p>Subscription</p>
                        </Link>
                        
                    </div>
                    <hr style={{border: '1px solid #e6e6e6'}} />
                    <div className="middle-nav">
                        <Link to='/' style={{textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                            <img src= {crow} alt='crow' className='coin-crow'/>
                            <h2>CoinCrow</h2>
                        </Link>
                        
                        <ul>
                            <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
                                <li>Home</li>
                            </Link>
                            <Link to='/coins' style={{textDecoration: 'none', color: 'inherit'}}>
                                <li>Coins</li>
                            </Link>
                            <Link to='/exchanges' style={{textDecoration: 'none', color: 'inherit'}}>
                                <li>Exchanges</li>
                            </Link>
                            <Link to='/defi' style={{textDecoration: 'none', color: 'inherit'}}>
                                <li>DeFi</li>
                            </Link>
                            <Link to='/nft' style={{textDecoration: 'none', color: 'inherit'}}>
                                <li>NFT</li>
                            </Link>
                           <Link to='/portfolio' style={{textDecoration: 'none', color: 'inherit'}}>
                                <li>Portfolio</li>
                           </Link>
                            <Link to='/publications' style={{textDecoration: 'none', color: 'inherit'}}>
                                <li>Publications</li>
                            </Link>
                            
                            <li onMouseOver={() => setResourcesHover(true)} onMouseOut={()=> setResourcesHover(false)}>Resources</li>
                            <li onMouseOver={() => setProductsHover(true)} onMouseOut={()=> setProductsHover(false)}>Products</li>
                            <li onMouseOver={() => setCommunityHover(true)} onMouseOut={()=> setCommunityHover(false)}>Community</li>
                        </ul>
                        <input type='text' className='middle-nav-input' placeholder= 'Search' />
                    </div>

                    <div className='resources-hover' style={{display: resourcesHover ? 'flex' : 'none', backgroundColor: darkMode ? '#252526' : '#fff'}} onMouseOver={() => setResourcesHover(true)} onMouseOut={()=> setResourcesHover(false)}>
                        <Link to='/explore-all-coins' style={{textDecoration: 'none', color: 'inherit'}}>
                            <p>Explore All Coins</p>
                        </Link>
                         
                    </div>

                    <div className="products-hover" style={{display: productsHover ? 'flex' : 'none', backgroundColor: darkMode ? '#252526' : '#fff'}} onMouseOver={() => setProductsHover(true)} onMouseOut={()=> setProductsHover(false)}>
                        <Link to='/subscription-plans' style={{textDecoration: 'none', color: 'inherit'}}>
                            <p>Premium Subscription</p>
                        </Link>
                    </div>

                    <div className="community-hover" style={{display: communityHover ? 'flex' : 'none', backgroundColor: darkMode ? '#252526' : '#fff'}} onMouseOver={() => setCommunityHover(true)} onMouseOut={()=> setCommunityHover(false)}>
                        <a href="www.twitter.com/manlikedonald">Twitter</a>
                        <a href="mailto: ugobudedonald@gmail.com">Email</a>
                    </div>
                    <hr style={{border: '1px solid #e6e6e6'}}/>
                    <div className="bottom-nav">
                        <ul>
                            <li><b>Coin: <span>7953</span></b></li>
                            <li><b>Exchanges: <span>475</span></b></li>
                            <li><b>Market Cap: <span>$1,591,058,940,455</span></b></li>
                            <li><b>24h Vol:</b> <span> $116,400,564,232</span></li>
                            <li><b>Dominance</b>: BTC 40.2% ETH 18.2%</li>
                            <li><img src={gas} alt="gas" className='gas' /> <b>ETH Gas</b>: 23 gwei</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="body">
                    <div className="security-body">
                        <div className="account-column">
                            <h1>Account Details</h1>
                            <p tabindex="0" onClick={handleCandies}>My Candies <span><b>Beta</b></span></p>
                            <p tabindex="0" onClick={handleRewards}>Rewards</p>
                            <p tabindex="0" onClick={handleSub}>Subscription</p>
                            <p tabindex="0" onClick={handleSecurity}>Login and Security</p>
                        </div>
                        <div className="security-column" style={{display: security ? 'flex' : 'none'}}>
                            <p><span style={{color: '#7AB52B'}}>Home > </span> Login and Security</p>
                            <h2>Login and Security</h2>
                            <p>
                                <b>Email</b>
                            </p>
                            <input type="text" placeholder='ugobudedonald@gmail.com' />
                            <p>
                                <b>Password</b>
                            </p>
                            <input type="text" placeholder='******************' />
                            <p className='last-text'>Security tip: Use a combination of numbers, symbols, uppercase and lowercase characters. Do not reuse passwords that you have used in other apps or websites.</p>
                        </div>

                        <div className="security-column" style={{display: subscription ? 'flex' : 'none'}}>
                            <p><span style={{color: '#7AB52B'}}>Home > </span> Account Details > Subscriptions</p>
                            <h2>Subscription</h2>
                            <div className='subscription-div'>

                                <div>
                                    <b>You are currently not subscribed to anything.</b> 
                                    <br />
                                    <span>
                                        Support independent data for the crypto space - check out plans you can subscribe to!
                                    </span>
                                    
                                    <input type="button" value='See Plans' />
                                </div>
                        
                            </div>
                        </div>
                        <div className="security-column" style={{display: rewards ? 'flex' : 'none'}}>
                            <p><span style={{color: '#7AB52B'}}>Home > </span> Rewards</p>
                            <h2>CoinCrow Rewards</h2>
                            <br />
                            <div className='reward-div'>
                                <div>
                                    <img src={candy} alt="candy" className='security-reward-candy' />
                                </div>
                                <div className='candy-balance-button'>
                                    <div style={{display: 'flex', flexDirection: 'column', margin: 'auto 7rem'}}>
                                        <h2>{candyCount}</h2>
                                        <p>Candies Balance</p>
                                    </div>
                                    
                                </div>
                                <div>
                                    <button onClick={() => setCandyCount(prevCount => prevCount + 1)}> <span>Collect +1 More Candy</span> </button>
                                </div>
                            </div>
                            <br />
                            <div className="reward-books">
                                <div className="reward-books-button">
                                    <input 
                                        type="button" 
                                        value='Browse Rewards' 
                                        onClick={() => {
                                            setShowGrid(true)
                                            setMyRewards(false)
                                        }} 
                                    />
                                    <input 
                                        type="button" 
                                        value='My Rewards' 
                                        onClick={() => {
                                            setShowGrid(false)
                                            setMyRewards(true)
                                        }} 
                                    />
                                </div>
                                <br />
                                
                                <div className="grid-container" style={{display: showGrid ? 'grid' : 'none'}}>
                                    {
                                        gridImages.map(
                                            item => 
                                            <div key={item.id} className='grid-div'> 
                                                <img src={item.img} alt='images' className='grid-images' />
                                                <p style={{color: darkMode ? '#fff' : '#000'}}>{item.text}</p>
                                                <p style={{color: darkMode ? '#fff' : '#000'}}><b>{item.candies}</b></p>
                                            </div>
                                        )
                                    }
                                </div>
                                <div style={{display: myRewards ? 'block' : 'none'}}>
                                    You have collected {candyCount} candies.
                                </div>
                            </div>
                        </div>
                        <div className="security-column" style={{display: myCandies ? 'flex' : 'none'}}>
                            <p><span style={{color: '#7AB52B'}}>Home > </span> Candy</p>
                            <h2>My Candies<span className='my-candies-span'><b> Beta</b></span></h2>
                            <br />
                            <div>
                                <img src={candy} alt="candy" className='security-reward-candy' />
                            </div>
                            <div style={{paddingTop: '5rem'}}>
                                <h2>{candyCount} </h2>
                                <p>Candies Balance</p> 
                            </div>
                            
                        </div>
                    </div>  
                </div>
            </section>
            <section>
                <footer>
                    <div className="disclaimer">
                        <p>
                            <b style={{color: 'red', textDecoration: 'underline'}}> <img src={caution} alt="caution-logo" style={{width: '1rem'}} /> IMPORTANT DISCLAIMER:</b> &nbsp; All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms (“Site”) is for your general information only, procured from third party sources. We make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness. No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and discretion. You should conduct your own research, review, analyse and verify our content before relying on them. Trading is a highly risky activity that can lead to major losses, please therefore consult your financial advisor before making any decision. No content on our Site is meant to be a solicitation or offer.</p>
                    </div>
                    <div className="main-footer">
                        <div className="footer-content">
                            <div className="crow-div">
                                <span> 
                                    <img src= {crow} alt='crow' className='coin-crow'/>
                                    <h2>CoinCrow</h2>
                                    
                                    <p> FAQ | Help Center | Contact Us | Disclaimer </p>
                                    <p>Terms of Service | Privacy Policy | Bug Bounty</p>   
                                    <p> Ad Policy</p>   
                                    <p>© 2021 CoinCrow. All Rights Reserved.</p>   
                                    
                                </span>
                            </div>
                            <div className="footer-text">
                                <ul>
                                    <li><b>CoinCrow</b></li>
                                    <br />
                                    <li>About Us</li>
                                    <br />
                                    <li>Methodology</li>
                                    <br />
                                    <li>Careers</li>
                                    <br />
                                    <li>Branding Guide</li>
                                    <br />
                                    <li>Request Form</li>
                                    <br />
                                    <li>Advertising</li>
                                </ul>
                            </div>
                            <div className="footer-text-two">
                                <ul>
                                    <li> <b>Donations</b> </li>
                                    <br />
                                    <li>Bitcoin</li>
                                    <br />
                                    <li>Ethereum</li>
                                </ul>
                            </div>
                            <div className="newsletter">
                                <p>Interested to stay up-to-date with cryptocurrencies?</p>
                                <p>Get the latest crypto news, updates, and reports by subscribing to our free newsletter.</p>
                                <p>Your email address</p>
                                <input type="text" className='newsletter-input'/>
                                <input type="button" value='Subscribe' style={{backgroundColor: '#8DC646'}} />
                                <br />
                                <br />
                                <p>Download our app now</p>
                                <button><img src= {googlePlay} alt="googleplay" /></button>
                                <button><img src={appleStore} alt="applestore" /> </button>
                            </div>
                        </div>
                        <br />
                        <div className="owner">
                            <img src={crow} alt="crow" style={{width: '1.5rem'}} />  CoinCrow built by Donald Ugobude
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Gift
