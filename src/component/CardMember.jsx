import React from "react";
import {
    Button
  } from "reactstrap";

  import "./CardMember.scss";

class CardMember extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
  componentDidMount() {
  }
  render() {
    return (
      <div className="card-member">
          <p>{this.props.name}</p>
          <p>Skills: {this.props.skills}</p>
          <p>Certification: {this.props.certification}</p>
          <Button color="primary" className="button-member" onClick={this.props.onButtonClick}>Add member to group</Button>
      </div>
    );
  }
}

export default CardMember;
