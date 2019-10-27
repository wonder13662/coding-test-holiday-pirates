import React from "react";

class ErrorBox extends React.Component {
  render() {
    return <div>{this.props.errorMsg}</div>;
  }
}

export default ErrorBox;
