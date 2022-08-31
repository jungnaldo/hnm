import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ProductDtail = () => {
  const [product, setProduct] = useState(null);

  let { id } = useParams();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/jungnaldo/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    console.log(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice === true ? "Conscious choice" : ""}</div>
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
          </DropdownButton>
          <Button variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDtail;
