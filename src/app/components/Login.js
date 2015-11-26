import React, { Component, PropTypes } from 'react';
import util from 'util';

class Login extends Component {
  render() {
    const { loginTwitter, loginFacebook, state } = this.props;
    return (
      <div>
        <h3>Connect with:</h3>
        <p>{util.inspect(state)}</p>
        <button className="btn" onClick={loginTwitter}>Login on Twitter</button>
        <button className="btn" onClick={loginFacebook}>Login on Facebook</button>
      </div>
    );
  }
}

Login.propTypes = {
  loginTwitter: PropTypes.func.isRequired,
  loginFacebook: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default Login;
