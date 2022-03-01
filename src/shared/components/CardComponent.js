import React from "react";
import { Breadcrumb, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardComponent = ({ name, id, fileBase64, price }) => {
  return (
    <Card key={id} style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="rounded"
        style={{ height: "230px", width: "auto" }}
        src={"data:image/png;base64," + fileBase64}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {/* <Card.Text>{product.description}</Card.Text> */}
        <Card.Text>{"Desde $" + price}</Card.Text>
        <Breadcrumb>
          <Link to={`/more-info/${id}`} className={"breadcrumb-item"}>
            Más información...
          </Link>
        </Breadcrumb>
      </Card.Body>
    </Card>
  );
};
