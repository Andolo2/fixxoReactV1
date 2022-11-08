import {render, fireEvent} from '@testing-library/react'

import ShoppingCartContext from '../assets/context/shoppingCartContext'
import ShoppingCartItem from '../components/ShoppingCart/ShoppingCartItem'


describe(ShoppingCartItem, () => {



    it('If the increment buttons is pressed'), () =>{
        
        const {getByTestID, getByRole} = render(<ShoppingCartItem/>)
        const button = getByRole('button', {name: '-'})

        fireEvent.click(button)

        const value = Number(getByTestID('item.quantity').textContent)

        expect(value.toEqual(-1))
        
    }
})


