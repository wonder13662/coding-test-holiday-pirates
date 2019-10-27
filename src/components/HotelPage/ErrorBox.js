import React from "react";
import { Message } from "semantic-ui-react";
import "../../css/hotel-page.css";

class ErrorBox extends React.Component {
  render() {
    // return <div className="error-box">{this.props.errorMsg}</div>;
    return (
      <Message negative className="error-box">
        <Message.Header>
          Sorry for your inconvenience. We will fix this problem shortly.
        </Message.Header>
        <p>{this.props.errorMsg}</p>
      </Message>
    );
  }
}

export default ErrorBox;
