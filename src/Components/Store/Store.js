import {useContext} from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Album1 from "../../Assets/Music/Album 1.png";
import Album2 from "../../Assets/Music/Album 2.png";
import Album3 from "../../Assets/Music/Album 3.png";
import Album4 from "../../Assets/Music/Album 4.png";
import Tshirt from "../../Assets/Merch/Shirt.png";
import Cofee from "../../Assets/Merch/Cofee.png";
import CartContext from "../Context/cart-context";
import classes from './Store.module.css';

const albums = [
  {
    id: "m1",
    name: "Album 1",
    image: Album1,
    price: 12.99,
  },
  {
    id: "m2",
    name: "Album 2",
    image: Album2,
    price: 14.99,
  },
  {
    id: "m3",
    name: "Album 3",
    image: Album3,
    price: 9.99,
  },
  {
    id: "m4",
    name: "Album 4",
    image: Album4,
    price: 19.99,
  },
];

const merchs = [
  {
    id: "m5",
    name: "T-Shirt",
    image: Tshirt,
    price: 19.99,
  },
  {
    id: "m6",
    name: "Cofee Cup",
    image: Cofee,
    price:6.99,
  }
];

const Store = () => {
  const cartCntx = useContext(CartContext);
  const addToCartHandler = (item) => {
    cartCntx.addItem({...item,quantity:1});
  }
  return (
    <div>
      <Container className={classes.container}>
        <h3>Music</h3>
        <Row xs={1} md={2} className="g-8">
          {albums.map((album, index) => (
            <Col key={index}>
              <Card className={classes.card}>
                <Card.Header className={classes.name}>{album.name}</Card.Header>
                <Card.Body>
                  <Card.Img src={album.image} className={classes.img} />
                </Card.Body>
                <Card.Footer className={classes.footer}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>${album.price.toFixed(2)}</span>
                  <Button variant="primary" onClick={() => addToCartHandler(album)}>Add To Cart</Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className={classes.container}>
        <h3>Merch</h3>
        <Row xs={1} md={2} className="g-8">
          {merchs.map((merch, index) => (
            <Col key={index}>
              <Card className={classes.card}>
              <Card.Header className={classes.name}>{merch.name}</Card.Header>
                <Card.Body>
                  <Card.Img src={merch.image} />
                </Card.Body>
                <Card.Footer className={classes.img}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>${merch.price.toFixed(2)}</span>
                  <Button variant="primary" onClick={() => addToCartHandler(merch)}>Add To Cart</Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="text-center">
      <Button variant="outline-info" className=" my-4 ms-5">See the cart</Button>
      </div>
    </div>
  );
};

export default Store;