import {render, fireEvent, screen, within} from '@testing-library/react'


import ShoppingCartContext from '../assets/context/shoppingCartContext'
import ShoppingCartItem from '../components/ShoppingCart/ShoppingCartItem'
import Jumbotron from '../components/jumbotron/Jumbotron'



test('loads text in jumbotron', async () => { /* Simple test that checks if the text appears in the jumbotron component*/
    // ARRANGE
   
    const { getByTestId } = render(<Jumbotron/>)
  
    // ACT
    

    const jumboText = getByTestId('jumbo').innerHTML
    
  
    // ASSERT
    expect(jumboText).toBe('Online shopping free home delivery over $100')
    
  })

