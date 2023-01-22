import React from 'react';
import {Wrapper,StyledButton} from './App.styles'
import {Drawer,Grid,LinearProgress,Badge} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import {useState} from 'react'
import {useQuery} from 'react-query'
import { Cart, Item} from './components';

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
  const [cartItems,setCartItems] = useState([] as CartItemType[])
  const {data,isLoading,error} = useQuery<CartItemType[]>('products',getProducts)
  console.log(data)

  const getTotalItems = (items:CartItemType[]) =>{
    items.reduce((ack:number,item) => ack + item.amount,0 )
  }

  const handleAddToCart = (clickedItem:CartItemType) => {
    setCartItems(prev => {
      // if item is already existing
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if(isItemInCart) {
        // if the item already exist in cart, we loop through all element and find it and increment the amount by 1
        return prev.map(item => 
          item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
        )
      }
      
      // else we do destructuring and add the new item
      return [...prev,{...clickedItem,amount:1}]
    })
  }

  const handleRemoveFromCart = (id:number) => {
    setCartItems(prev =>
      prev.reduce((ack,item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack
          return [...ack,{...item,amount:item.amount - 1}]
        }else {
          return [...ack,item]
        }
      },[] as CartItemType[])  
    )
  }

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)} >
        <Cart
         cartItems={cartItems}
         addToCart={handleAddToCart}
         removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)} >
       <Badge badgeContent={12}>
        <AddShoppingCart/>
       </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
