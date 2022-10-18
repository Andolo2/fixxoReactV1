import React, {useState} from 'react'
import Salecard1 from '../components/salecards/Salecard1'


const SaleCardsSec = ({title, Saleproducts}) => {
    return(
        <section className="sale-layout-card-1">
        <div className="container-fluid">
           <div className="grey-card">
               <h2>2 for 29USD</h2>
               <button id="right">
                   <i id="top-left" class="fa-solid fa-chevron-down"></i>
                   FLASE SALE
                   <i id="bottom-right" class="fa-solid fa-chevron-up"></i>
               </button>
           </div>
           <div className="sale-cards">
               <div className='sale-card-row-1'>
               {
                Saleproducts.map(Saleproducts => <Salecard1 key={Saleproducts.id}  item={Saleproducts}/>)

               }
               </div>
               <div className='sale-card-row-2'>
               {
                Saleproducts.map(Saleproducts => <Salecard1 key={Saleproducts.id}  item={Saleproducts}/>)

               }
               </div>
           </div>
        </div>
   </section>
   

   
    )
}

export default SaleCardsSec