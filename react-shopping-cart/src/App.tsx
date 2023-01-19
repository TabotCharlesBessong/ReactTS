import React from 'react';
import {Wrapper,StyledButton} from './App.styles'
import {Drawer,Grid,LinearProgress,Badge} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import {useState} from 'react'
import {useQuery} from 'react-query'

export type CartItemType = {
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number
}

const getProducts = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json()

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  // const [cartItems,setCartItems] = useState([] as CartItemType[])
  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts)
  console.log(data)

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

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
