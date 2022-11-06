import React, {useState} from 'react'
import SaleCard2 from '../components/salecards/Salecard2'


const SaleCardsSec = ({title, items = []}) => {
    return(
        <section className="sale-layout-card-2">
        <div className="container-fluid">
           <div className="grey-card">
               <h2>2 for 29USD</h2>
               <button id="right">
                   <i id="top-left" className="fa-solid fa-chevron-down"></i>
                   FLASE SALE
                   <i id="bottom-right" className="fa-solid fa-chevron-up"></i>
               </button>
           </div>
           <div className="sale-cards">
               <div className='sale-card-row-1'>
               {
                items.map(product => <SaleCard2 key={product.articleNumber}  item={product}/>)
                

               }
               </div>
               <div className='sale-card-row-2'>
               {
                items.map(product => <SaleCard2 key={product.articleNumber}  item={product}/>)
               }
               </div>
           </div>
        </div>
   </section>
   

   
    )
}

export default SaleCardsSec