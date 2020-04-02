import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Row,
    Col
  } from "reactstrap";

  import "./Header.scss";

class Header extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <Row>
          <Col xs="12">
          <Breadcrumb className="header-group">
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Create Work Group</BreadcrumbItem>
        </Breadcrumb>
            </Col>
      </Row>
    );
  }
}

export default Header;
