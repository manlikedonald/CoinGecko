import React from 'react'

function Loading() {
    return (
        <div>
            <div className="spinner">
                <span style={{color: 'grey'}}>Powered by CoinGecko API</span>
                <br />
                <br />
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    )
}

export default Loading
