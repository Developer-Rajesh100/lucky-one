import React from "react";
import "./Players-Cart.css";
const PlayersCart = (props) => {
  // const AddedToCart = () => {
  //   console.log("clicked");
  // };
  const { addToCart } = props;
  return (
    <div className="cart">
      <img src={props.player.photo} alt="" />
      <h3>
        <i>{props.player.name}</i>{" "}
      </h3>
      <h4>
        Price : <i>${props.player.price}</i>
      </h4>
      {/* <a className="btn" href="#">
        <h6>ADD TO CART</h6>
      </a> */}
      <button onClick={addToCart} className="btn">
        ADD TO CART
      </button>
    </div>
  );
};

export default PlayersCart;
