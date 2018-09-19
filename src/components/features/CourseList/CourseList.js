import React, { Component } from 'react';
import { shape, array, func } from 'prop-types';
import { DefaultContent, CourseResumeCard } from '../../modules';
import { Wrapper } from '../../elements';
import { deepSelect } from '../../../lib/utils';

class CourseList extends Component {
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

    const courseData = courses.payload || [];
    const userCourses = deepSelect(authentication, 'getUser.account.subscriptions', []);

    return (
      <Wrapper>
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
                  keyWords={course.keyWords}
                  updated_at={course.updated_at}
                  created_at={course.created_at}
                />
              </li>
            );
          })}

          {(!Array.isArray(courseData) || !userCourses.length) && (
            <DefaultContent
              title="Você ainda não se inscreveu em nenhum curso."
              description="Se inscreva em cursos para ampliar seus conhecimentos."
              linkText="Ir para lista de cursos"
              href="/courses"
            />
          )}
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
