import React from 'react'
import LeftAd from '../components/Ad-cards/AdLeftCard'
import RightAd from '../components/Ad-cards/AdRightCard'

function AdCardsSec() {
  return (
    <div>
        <section className='two-ad-cards'>
            <div className='container'>
                <LeftAd></LeftAd>
                <RightAd></RightAd>
            </div>
        </section>
    </div>
  )
}

export default AdCardsSec

