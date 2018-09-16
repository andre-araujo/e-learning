import React, { Component } from 'react';
import { string } from 'prop-types';

import Hero from '../../modules/Hero';

import {
  Container,
} from './CourseDetails.styles';

class CourseDetails extends Component {
  componentDidMount() {
    const { id, getCourseDetail } = this.props;

    getCourseDetail(id);
  }

  render() {
    return (
      <Container>
        <Hero />
      </Container>
    );
  }
}

CourseDetails.defaultProps = {
  id: '',
};

CourseDetails.propTypes = {
  id: string,
};

export default CourseDetails;
