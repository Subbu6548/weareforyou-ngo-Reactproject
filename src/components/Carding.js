import React from "react";
import Card from "react-bootstrap/Card";

import "../style.css";

const Carding = () => {
  return (
    <div>
      <Card className="cards" style={{ width: "350px" }}>
        <Card.Img
          variant="top"
          src={require("/Users/subbu/weforyou/src/images/card1.jpg")}
        />
        <Card.Body className="container">
          <Card.Title>
            We Are For You Foundation Of Sowmya has been accredited as a GlobalGiving
            validated charity
          </Card.Title>
          <Card.Text>We Are For You Foundation has been certified .</Card.Text>
        </Card.Body>
      </Card>

      <Card className="cards" style={{ width: "350px" }}>
        <Card.Img
          variant="top"
          src={require("/Users/subbu/weforyou/src/images/card2.jpg")}
        />
        <Card.Body className="container">
          <Card.Title>
            We For You Foundation has been accredited as a GlobalGiving
            validated charity
          </Card.Title>
          <Card.Text>
            The accreditation recognizes and verifies the transparency and
            public accountability of organizations
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="cards" style={{ width: "380px" }}>
        <Card.Img
          variant="top"
          src={require("/Users/subbu/weforyou/src/images/card3.jpg")}
        />
        <Card.Body className="container">
          <Card.Title>
            Special Consultative Status with the United Nations Economic and
            Social Council
          </Card.Title>
          <Card.Text>
            The validation is extended to organizations on basis of a 100 point
            due diligence review,Organization in Special Consultative Status
            since 2012
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Carding;
