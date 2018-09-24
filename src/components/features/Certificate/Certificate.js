import React, { Component } from 'react';

import {
  Text, Button,
} from '../../elements';

class Certificate extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const {
      courseId,
      getCertification,
    } = this.props;

    getCertification(courseId);
  }

  render() {
    const {
      isAdmin,
    } = this.props;

    return isAdmin ? null : (
      <div>
        <Text.Subtitle tag="h1" margin="0 0 10px">
          Certificado digital:
        </Text.Subtitle>

        <hr />

        <form onSubmit={this.onSubmit}>
          <Button full>
            Requisitar certificado
          </Button>
        </form>
      </div>
    );
  }
}

export default Certificate;
