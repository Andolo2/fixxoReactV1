import React, {useState} from 'react'
import NineCard from '../components/nineCards/NineCard'


const NineCardSec = ({title, TopNineproducts}) => {
    return(
        <section className="nine-cards">
            <div className="container">
            <div className='NineCardHeader'>
                <h4>Latest Product</h4>
                <h4>Latest Product</h4>
                <h4>Latest Product</h4>
                
            </div>
            <div className="card-rows">
             {
                 TopNineproducts.map(TopNineproducts => <NineCard key={TopNineproducts.id} item={TopNineproducts} />)
             }
              
           
            </div>
            </div>
        </section>
        
    )
}

export default NineCardSec