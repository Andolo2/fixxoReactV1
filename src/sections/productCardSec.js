
import ProdCards from '../components/product-cards/ProductCards'

const ProdSection = ({title, products}) => {
  


  return (
    <section className="product-grid">
    <div className="product-header">
       <h2>Featured produtcs</h2>
   </div>
   <div className='container'>
    <div className='product-rows'>
      {
        products.map(product => <ProdCards key={product.id}  item={product}/>)
      }

    </div>


    
  </div>
    </section>
  )
}



export default ProdSection