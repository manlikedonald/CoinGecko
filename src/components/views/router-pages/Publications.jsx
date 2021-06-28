import React, {useState} from 'react'
import crow from '../../assets/images/crow-solid.svg'
import slideOne from '../../assets/images/slide1.webp'
import slideTwo from '../../assets/images/slide2.webp'
import slideThree from '../../assets/images/slide3.webp'
import slideFour from '../../assets/images/slide4.webp'
import slideFive from '../../assets/images/slide5.webp'
import archive from '../../assets/images/archive-solid.svg'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'



const slides = [
    {
        img: slideOne
    },
    {
        img: slideTwo
    },
    {
        img: slideThree
    },
    {
        img: slideFour
    },
    {
        img: slideFive
    }
]

function Publications() {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    
    return (
        <div className='publications'>
            <div className="title">
                <img src={crow} alt="crow" className='crow' />
                <h2>CoinCrow</h2>
            </div>
            <div className='publication-body'>
                <div className="top-body">
                    <h1>CoinCrow Newsletter</h1>
                    <p>Sign up today for free and get our daily cryptocurrency newsletter to stay updated with the latest news.</p>
                    <br />
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="button" value='Get Started' className='input-button' />
                </div>
                <br />
                <div className="main-body">
                    <div className="header">
                        <h2>HERE'S A SNEAK PEEK TO WHAT YOU'LL GET</h2>
                    </div>
                    <div className='slide-show'>
                        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                        {
                            slides.map((slide, index) => 
                                <div key={index + 1} className={index === current ?  'slides active' : 'slides'}>
                                    {index === current && (<img src={slide.img} alt={slide.img} className='slide-image' />)}
                                    
                                </div>
                            )
                        }
                    </div>
                    <br />
                    <div className='button-div'>
                        <button onClick={() => alert('We have no Newsletter, this is a clone of CoinGecko')}>
                            <img src={archive} alt="archive-logo" />
                            Read Our Previous Newsletters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publications
