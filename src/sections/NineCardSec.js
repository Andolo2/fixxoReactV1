import React, {useState} from 'react'
import NineCard from '../components/nineCards/NineCard'


const NineCardSec = ({title, TopNineproducts}) => {
    return(
        <section className="nine-cards">
            <div className="container">
            <div className="card-row-1">
             <div className='column-header'></div>
               {
                
                TopNineproducts.map(TopNineproducts => <NineCard key={TopNineproducts.id} item={TopNineproducts} />)
               }
            </div><div className="card-row-2">
               {
                TopNineproducts.map(TopNineproducts => <NineCard key={TopNineproducts.id} item={TopNineproducts} />)
               }
            </div>
            <div className="card-row-3">
               {
                TopNineproducts.map(TopNineproducts => <NineCard key={TopNineproducts.id} item={TopNineproducts} />)
               }
            </div>
            </div>
        </section>
        
    )
}

export default NineCardSec