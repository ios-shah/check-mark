import React, { Component, PropTypes } from 'react';
import SelectProject from './SelectProject';
import Embedly from './Embedly';
import BackBar from './BackBar';

class SavePost extends Component {
  render() {
    const { loginTwitter, loginFacebook, goBack, savePost, submitPost, saveTranslation, submitTranslation, state } = this.props;
    return (
      <div>
        <BackBar goBack={goBack} />
        <div className="textured">
          <div className="light-gray-background">
            <h3 className="action">Save to existing project for translation</h3>
            <div className="column form-column">
              <Embedly url={state.extension.url} />
              <form onSubmit={submitPost.bind(this)}>
                <SelectProject projects={state.extension.projects} />
                <button className="btn btn-large" id="submit">Add to Project</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SavePost;
