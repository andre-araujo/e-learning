import React, { Component } from 'react';
import { shape, array, func } from 'prop-types';
import { DefaultContent, CourseResumeCard } from '../../modules';
import { Wrapper } from '../../elements';

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

    const courseData = courses.payload || [];

    return (
      <Wrapper>
        <ul>
          {courseData.map(course => (
            <li key={course.id}>
              <CourseResumeCard
                id={course.id}
                name={course.name}
                instructorName={course.instructorName}
                category={course.category}
                keyWords={course.keyWords}
                updated_at={course.updated_at}
                created_at={course.created_at}
              />
            </li>
          ))}

          {!courseData && (
            <DefaultContent
              title="Você ainda não se inscreveu em nenhum curso."
              description="Se inscreva em cursos para ampliar seus conhecimentos."
              linkText="Ir para lista de cursos"
              href="/"
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
