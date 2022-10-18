
import ProdCards from '../components/product-cards/ProductCards'

const ProdSection = ({title, products}) => {
  


  return (
    <section className="product-cards">
    <div className="product-header">
       <h2>Featured produtcs</h2>
   </div>
   <div className='container'>
    <div className='product-row1'>
      {
        products.map(product => <ProdCards key={product.id}  item={product}/>)
      }

    </div>

    
  </div>
    </section>
  )
}



export default ProdSection