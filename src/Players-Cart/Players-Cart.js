import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Players-Cart.css";
const PlayersCart = (props) => {
  // const AddedToCart = () => {
  //   console.log("clicked");
  // };
  const { addToCart, player } = props;
  return (
    <div className="cart">
      <img src={player.photo} alt="" />
      <h3>
        <i>{player.name}</i>{" "}
      </h3>
      <h4>
        Price : <i>${player.price}</i>
      </h4>
      {/* <a className="btn" href="#">
        <h6>ADD TO CART</h6>
      </a> */}
      <button
        onClick={() => {
          addToCart(player);
        }}
        className="btn"
      >
        ADD TO CART
        <FontAwesomeIcon className="shoping-cart" icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default PlayersCart;
