import React from 'react';
import {Wrapper,StyledButton} from './App.styles'
import {Drawer,Grid,LinearProgress,Badge} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import {useState} from 'react'

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)} >
        <h1>Hello Typescript</h1>
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)} >
       <Badge badgeContent={12}>
        <AddShoppingCart/>
       </Badge>
      </StyledButton>
    </Wrapper>
  );
}

export default App;
