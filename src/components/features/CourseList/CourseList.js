import React, { Component } from 'react';
import { shape, array, func } from 'prop-types';
import { CourseResumeCard } from '../../modules';
import { Wrapper, TextInput, Text } from '../../elements';
import { deepSelect, getCourseRating } from '../../../lib/utils';

class CourseList extends Component {
  state={ searchQuery: '' }

  componentDidMount() {
    const {
      getCourses,
    } = this.props;

    getCourses();
  }

  render() {
    const {
      authentication,
      courses,
      hideUnsubscribed,
    } = this.props;

    const {
      searchQuery,
    } = this.state;

    let courseData = courses.payload || [];
    const userCourses = deepSelect(authentication, 'getUser.account.subscriptions', []);

    courseData = courseData.filter((course) => {
      const regex = new RegExp(searchQuery);
      const found = regex.test(course.name)
        || regex.test(course.category)
        || regex.test(course.keyWords);

      return found;
    });

    return (
      <Wrapper>
        <Text.Subtitle margin="30px 0 0">
          Buscar Curso
        </Text.Subtitle>
        <TextInput
          value={searchQuery}
          onChange={({ target }) => this.setState({ searchQuery: target.value })}
          placeholder="Digite o nome, categoria ou palavra-chave"
        />
        <ul>
          {courseData.map((course) => {
            const joined = userCourses
              .find(subscription => course.id === subscription.courseId);

            return hideUnsubscribed && !joined ? null : (
              <li key={course.id}>
                <CourseResumeCard
                  id={course.id}
                  joined={joined}
                  name={course.name}
                  instructorName={course.instructorName}
                  category={course.category}
                  updated_at={course.updated_at}
                  created_at={course.created_at}
                  rating={getCourseRating(course.subscriptions)}
                />
              </li>
            );
          })}
        </ul>
      </Wrapper>
    );
  }
}

CourseList.defaultProps = {
  courses: [],
};

CourseList.propTypes = {
  courses: shape({
    payload: array,
  }),
  getCourses: func.isRequired,
};

export default CourseList;
