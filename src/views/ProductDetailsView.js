import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsView = () => {

    const {id} = useParams()
    const [products, setProducts] = useState({})

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch ('https://win22-webapi.azurewebsites.net/api/products')
            setProducts(await result.json())
            
        }
        fetchData()
    },[setProducts],[])

    console.log(id)
  return (
    <div>ProductDetailsView
        <div>{products.name}</div>
        <img src={products.imageName} />
       

    </div>
    
  )
}

export default ProductDetailsView