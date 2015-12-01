import React, { Component, PropTypes } from 'react';
import Login from './Login';
import Menu from './Menu';
import Message from './Message';
import SavePost from './SavePost';
import SaveTranslation from './SaveTranslation';

class Bridge extends Component {
  render() {
    const { loginTwitter, loginFacebook, goBack, savePost, submitPost, saveTranslation, submitTranslation, state } = this.props;
    let view = ((state && state.bridge && state.bridge.view) ? state.bridge.view : 'login');

    switch (view) {
      case 'login':
        return (<Login {...this.props} />);
      case 'menu':
        return (<Menu {...this.props} />);
      case 'message':
        return (<Message {...this.props} />);
      case 'save_post':
        return (<SavePost {...this.props} />);
      case 'save_translation':
        return (<SaveTranslation {...this.props} />);
      default:
        return null;
    }
  }
}

Bridge.propTypes = {
  state: PropTypes.object.isRequired
};

export default Bridge;
