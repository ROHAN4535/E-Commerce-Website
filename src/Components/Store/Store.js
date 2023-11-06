import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Album1 from "../../Assets/Music/Album 1.png";
import Album2 from "../../Assets/Music/Album 2.png";
import Album3 from "../../Assets/Music/Album 3.png";
import Album4 from "../../Assets/Music/Album 4.png";
import Tshirt from "../../Assets/Merch/Shirt.png";
import Cofee from "../../Assets/Merch/Cofee.png";

const albums = [
  {
    name: "Album 1",
    image: Album1,
    price: 12.99,
  },
  {
    name: "Album 2",
    image: Album2,
    price: 14.99,
  },
  {
    name: "Album 3",
    image: Album3,
    price: 9.99,
  },
  {
    name: "Album 4",
    image: Album4,
    price: 19.99,
  },
];

const merchs = [
  {
    name: "T-Shirt",
    image: Tshirt,
    price: 19.99,
  },
  {
    name: "Cofee Cup",
    image: Cofee,
    price:6.99,
  }
];

const Store = () => {
  return (
    <div>
      <Container>
        <h3 className="mt-4 mb-3 text-center">Music</h3>
        <Row className="g-6">
          {albums.map((album, index) => (
            <Col key={index}>
              <Card style={{ width: "100%" }}>
                <Card.Header>{album.name}</Card.Header>
                <Card.Body>
                  <Card.Img src={album.image} />
                </Card.Body>
                <Card.Footer>
                <div className="d-flex justify-content-between align-items-center">
                  <span>${album.price.toFixed(2)}</span>
                  <Button variant="primary">Add To Cart</Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container >
        <h3 className="mt-4 mb-3 text-center">Merch</h3>
        <Row className="g-6">
          {merchs.map((merch, index) => (
            <Col key={index}>
              <Card style={{ width: "50%" }}>
                <Card.Header>{merch.name}</Card.Header>
                <Card.Body>
                  <Card.Img src={merch.image} />
                </Card.Body>
                <Card.Footer>
                <div className="d-flex justify-content-between align-items-center">
                  <span>${merch.price.toFixed(2)}</span>
                  <Button variant="primary">Add To Cart</Button>
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