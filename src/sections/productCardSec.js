
import { useContext } from 'react'
import ProdCards from '../components/product-cards/ProductCards'
import { productContext } from '../assets/context/context'

const ProdSection = ({title}) => {
  
const products = useContext(productContext)

  return (
    <section className="product-grid">
    <div className="product-header">
       <h2>{title}</h2>
   </div>
   <div className='container'>
    <div className='product-rows'>
      {
        products.map(product => <ProdCards key={product.articleNumber}  item={product}/>)
      }

    </div>


    
  </div>
    </section>
  )
}



export default ProdSection