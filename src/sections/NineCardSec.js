import React, {useState} from 'react'
import NineCard from '../components/nineCards/NineCard'


const NineCardSec = ({title, items = []}) => {
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
                  items.map(product => <NineCard key={product.articleNumber}  item={product}/>)
             }
              
           
            </div>
            </div>
        </section>
        
    )
}

export default NineCardSec