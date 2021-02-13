import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Bootstrap imports
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";

// Component imports
import Rating from "../../Components/Rating";

const ProductPage = ({ match }) => {
  const [product, setProdcut] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/e-com/products/${match.params.id}`);
      setProdcut(data);
    };
    fetchProduct();
  }, [match.params.id]);
  return (
    <>
      <Link className="btn btn-primary my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-light text-dark">
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item className="bg-light text-dark">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item className="bg-light text-dark">
              <h4>Price: ${product.price}</h4>
            </ListGroup.Item>
            <ListGroup.Item className="bg-light text-dark">
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup>
              <ListGroupItem className="bg-light text-dark">
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem
                className={`bg-light ${
                  product.countInStock > 0 ? "text-success" : "text-danger"
                }`}
              >
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="bg-light">
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
