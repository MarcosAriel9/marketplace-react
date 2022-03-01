import React from "react";
import { Col, Row } from "react-bootstrap";
import { CategoryList } from "./components/CategoryList";

export const CategoryScreen = () => {
  return (
    <Row>
      <Col>
        <CategoryList />
      </Col>
    </Row>
  );
};
