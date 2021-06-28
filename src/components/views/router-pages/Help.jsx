import React from 'react'
import crow from '../../assets/images/crow-solid.svg'


function Help() {
    return (
        <div className='help-page'>
            <section>
                <div className='help-div'>
                    <div className='help-title'>
                        <img src={crow} alt="crow" />
                        <h2>CoinCrow</h2>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h1>What are you looking for?</h1>
                        <p><b>Get help straight from our team...</b> </p>
                        <br />
                        <input type="text" placeholder='Search for answers...' />
                    </div>
                </div>
                
                   
            </section>
        </div>
    )
}

export default Help
