import { Button } from "@material-ui/core"
import { Wrapper } from "./Item.styles"
import { CartItemType } from "../../App"
import React from "react";

type Props = {
  item:CartItemType;
  handleAddToCart:(clickedItem:CartItemType) => void;
}

const Item: React.FC<Props> = ({item,handleAddToCart}) => {
  return (
    <Wrapper>
      <img src="../../assets/family (8).jpg" alt="" />
      <div>
        <h3>Title</h3>
        <p>Description</p>
        <h4>Price</h4>
      </div>
      <Button onClick={() => handleAddToCart(item) } >Add to cart</Button>
    </Wrapper>
  )
}

export default Item
