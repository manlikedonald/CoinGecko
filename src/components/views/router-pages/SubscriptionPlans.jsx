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
    

function SubscriptionPlans() {
    const [darkMode, setDarkMode] = useState(false);
    const [userHover, setUserHover] = useState(false)
    const [resourcesHover, setResourcesHover] = useState(false)
    const [productsHover, setProductsHover] = useState(false)
    const [communityHover, setCommunityHover] = useState(false)

    return (
        <div>
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
                            <Link to='/gifts'>
                                <li> 
                                    <img src={gift} alt='gift' className='top-nav-ul-img2' /> 
                                </li>
                            </Link>
                            
                            <li> 
                                <img src={bookmark} alt='bookmark' className='top-nav-ul-img1' /> 
                            </li>
                            <li onMouseOver={() => setUserHover(true)} onMouseOut={()=> setUserHover(false)}> 
                                <img src={user} alt='user' className='top-nav-ul-img' /> 
                            </li>
                            <li> 
                                <img src={moon} alt='moon' className='top-nav-ul-img' onClick={() => setDarkMode(!darkMode)} /> 
                            </li>
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
                    <div className="subscription-plans-body">
                        <p><span style={{color: '#7AB52B'}}>Home > </span> CoinCrow Premium</p>
                        <h2>CoinCrow Premium</h2>
                        <p>Monitor the crypto markets distraction-free and stay ahead of the curve.</p>
                        <br />
                        
                        <div className="grid-container">
                            <div className="grid-div">
                                <div style={{backgroundColor: '#E4E7EB', height: '5%'}}></div>
                                <div style={{textAlign: 'center'}}>
                                    <h2>Free</h2>
                                    <p>CoinGecko as it is - perfect for anyone looking to get a 360-overview on the crypto markets</p>
                                    <h1>$0.00<span style={{fontSize: '12px'}}>/Lifetime</span></h1>
                                    <br />
                                    <br />
                                    <button style={{backgroundColor: '#E4E7EB', color: '#CDCDCD'}}>
                                        <b>Current Plan</b>
                                    </button>
                                    <hr />
                                </div>
                                <div>
                                    <p><b>Top features:</b></p>
                                    <ul>
                                        <li>Live prices, charts & historical data on over 6,000+ cryptocurrencies.</li>
                                        <li>Redeem daily Candies for swags and goodies!</li>
                                        <li>Portfolio - Track your holdings. Synced across all devices.</li>
                                        <li>Android & iOS ready - Track crypto markets wherever!</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid-div">
                                <div style={{backgroundColor: '#8DC646', height: '5%'}}></div>
                                <div style={{textAlign: 'center'}}>
                                    <h2>Premium</h2>
                                    <p>Experience ad-free CoinGecko and stay ahead of the curve.</p>
                                    <h1>$4.16<span style={{fontSize: '12px'}}>/mo</span></h1>
                                    <p><span style={{color: 'red', textDecoration: 'line-through'}}>$60</span> $49.90/yr</p>
                                    <br />
                                    <button style={{backgroundColor: '#8DC646', color: '#fff'}}> 
                                        <b>Upgrade to Premium</b> 
                                    </button>
                                    <hr />
                                </div>
                                <div>
                                    <p><b>Everything in Free, plus:</b></p>
                                    <ul>
                                        <li>Ad-free CoinCrow (Web, Mobile App, Newsletter)</li>
                                        <li>More Candies (1.1x) - Redeem deals to further your crypto experience!</li>
                                        <li>CoinCrow Premium NFT</li>
                                        <li>😎   Support independent data for the crypto space!</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid-div">
                                <div style={{background: 'linear-gradient(to right, #F7BF24, #E1C12F, #B4C43B, #8DC645)', height: '5%'}}></div>
                                <div style={{textAlign: 'center'}}>
                                    <h2>Premium+</h2>
                                    <p>For the more demanding, powerful crypto enthusiasts looking for an edge in the markets.</p>
                                    <h1>$8.32<span style={{fontSize: '12px'}}>/mo</span></h1>
                                    <p><span style={{color: 'red', textDecoration: 'line-through'}}>$120</span> $99.90/yr</p>
                                    
                                    <button style={{backgroundColor: '#8DC646', color: '#fff'}}>
                                        <b>Upgrade to Premium+</b> 
                                    </button>
                                    <hr />
                                </div>
                                <div>
                                    <p><b>Everything in Free, plus:</b></p>
                                    <ul>
                                        <li>Ad-free CoinCrow (Web, Mobile App, Newsletter)</li>
                                        <li>Even more Candies (1.2x) - Redeem deals to maximize your crypto experience!</li>
                                        <li>CoinCrow Premium+ NFT</li>
                                        <li>CoinCrow Publications - You'll get our critically acclaimed How to DeFi, as well as our newcomer's guide to the grandfather of crypto - How to Bitcoin. Stay tuned for more!</li>
                                        <li>Private Telegram group with CoinGecko's research analysts.</li>
                                        <li>Be a pioneer - Get early access to new features first when we release them!</li>
                                        <li>😎   Support independent data for the crypto space!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <br />
                        <h2 className='faqs-head'>FAQ</h2>
                        <div className="faqs">
                            <div className="questions">
                                <p><b>What are my payment options?</b></p>
                                <p><b>I would like to cancel my subscription. How should I go about that?</b></p>
                                <p><b>Will I be notified for my subscription renewal?</b></p>
                                <p><b>What is your refund policy?</b></p>
                                <p><b>How do I get NFTs and access to invite-only Telegram groups as a subscriber?</b></p>
                            </div>
                            <div className="answers">
                                <p>For fiat payments, Stripe handles the payment process for us. Acceptable payment methods include all major credit cards supported by Stripe. For cryptocurrency payments, Coinbase Commerce handles the process for us.</p>
                                <p>In order to cancel your subscription, you may head over to Subscription page under your account, and click on "Cancel Plan".</p>
                                <p>Depending on the setting you have selected - Stripe's payment processing may charge you automatically for the next billing cycle and extend your subscription with us. You may check the settings at this account.</p>
                                <p>Subscriptions are non-refundable.</p>
                                <p>The NFT will be in your Candy Rewards page - just follow the steps to claim it!</p>
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
        </div>
    )
}

export default SubscriptionPlans
