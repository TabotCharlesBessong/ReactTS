
import React from 'react'
import {Wrapper} from './CartItem.styles'
import { Button } from '@material-ui/core'

const CartItem = () => {
  return (
    <Wrapper>
      <div>
        <h3>Title</h3>
        <div className="information">
          <p>Price</p>
          <p>Total</p>
        </div>
        <div className="buttons">
          <Button
          size='small'
          disableElevation
          variant='contained'
          >
           red 
          </Button>
          <p>4</p>
          <Button
          size='small'
          disableElevation
          variant='contained'
          >
           inc 
          </Button>
        </div>
      </div>
      <img src="../../assets/family (10).jpg" alt="" />
    </Wrapper>
  )
}

export default CartItem
