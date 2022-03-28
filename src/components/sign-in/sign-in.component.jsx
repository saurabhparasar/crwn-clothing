import React from "react";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="sign-in">
        <h1>I Already Have An Account</h1>
        <span>SignIn With Your Email And Password</span>
      </div>
    );
  }
}
