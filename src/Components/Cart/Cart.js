import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CartContext from "../Context/cart-context";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

// const cartElements = [
//   {
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

//     quantity: 2,
//   },

//   {
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

//     quantity: 3,
//   },

//   {
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

//     quantity: 1,
//   },
// ];

const Cart = () => {
  const cartCntx = useContext(CartContext);
  const [show, setShow] = useState(false);
  let cartCount = 0;
  let total = 0;

  const closeHandler = () => {
    setShow(false);
  };

  const showHandler = () => {
    setShow(true);
  };

  if (!cartCntx.items || cartCntx.items.length === 0) {
    return (
      <div>
        <Button variant="outline-info" onClick={showHandler}>
          Cart {cartCount}
        </Button>
        <Modal show={show} onHide={closeHandler} animation={false}>
          <div className={classes.modal}>
            <Modal.Header closeButton>
              <Modal.Title className={classes.title}>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Your cart is empty.</p>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    );
  }

  cartCntx.items.forEach((ele) => {
    cartCount += Number(ele.quantity);
    total += Number(ele.price) * Number(ele.quantity);
  });

  const purchaseHandler = () => {
    alert("Thanks for purchase!")
  }

  return (
    <div>
      <Button variant="outline-info" onClick={showHandler}>
        Cart {cartCount}
      </Button>

      <Modal show={show} onHide={closeHandler} animation={false}>
      <div className={classes.modal}>
          <Modal.Header closeButton>
            <Modal.Title className={classes.title}>Cart</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className={classes.heading}>
              <span>ITEM</span>
              <span>Price</span>
              <span>Quantity</span>
            </div>
            <ul>
              {cartCntx.items.map((cart, idx) => (
                <CartItems
                  key={idx}
                  index={idx}
                  image={cart.imageUrl?.[0]}
                  name={cart.title}
                  price={cart.price}
                  quantity={cart.quantity}
                />
              ))}
            </ul>
            <div className={classes.total}>
              <h5>Total</h5>
              <span>${total.toFixed(2)}</span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={purchaseHandler}>Purchase</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;