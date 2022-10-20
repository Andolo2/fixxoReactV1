import React, {useState} from 'react'
import SaleCard2 from '../components/salecards/Salecard2'


const SaleCardsSec = ({title, BottomSaleproducts}) => {
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
                BottomSaleproducts.map(BottomSaleproducts => <SaleCard2 key={BottomSaleproducts.id}  item={BottomSaleproducts}/>)

               }
               </div>
               <div className='sale-card-row-2'>
               {
                BottomSaleproducts.map(BottomSaleproducts => <SaleCard2 key={BottomSaleproducts.id}  item={BottomSaleproducts}/>)

               }
               </div>
           </div>
        </div>
   </section>
   

   
    )
}

export default SaleCardsSec