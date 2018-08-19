import React, { Component } from 'react';
import { array, func } from 'prop-types';

class CourseList extends Component {
  componentDidMount() {
    const {
      getCourses,
    } = this.props;

    getCourses();
  }

  render() {
    const {
      courses,
    } = this.props;

    return (
      <ul>
        {courses.map(course => (
          <li>
            {course.name}
          </li>
        ))}
      </ul>
    );
  }
}

CourseList.defaultProps = {
  courses: [],
};

CourseList.propTypes = {
  courses: array, // eslint-disable-line
  getCourses: func.isRequired,
};

export default CourseList;
