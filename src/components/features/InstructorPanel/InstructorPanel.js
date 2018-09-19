import React, { Component, Fragment } from 'react';
import { shape, array, func } from 'prop-types';

import { DefaultContent, CourseResumeCard } from '../../modules';
import { Wrapper, Text, InternalLink } from '../../elements';

class InstructorPanel extends Component {
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
        {!courseData.length && (
          <DefaultContent
            title="Ainda não existe nenhum curso criado."
            description="Crie cursos e compartilhe conhecimento."
            linkText="Criar um novo curso"
            href="/instructor-panel/new-course"
          />
        )}

        {courseData.length && (
          <Fragment>
            <Text.Title margin="40px 0">
              Painel do instrutor
            </Text.Title>
            <InternalLink margin="0 0 40px" href="/instructor-panel/new-course">
              Criar novo curso
            </InternalLink>
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
            </ul>
          </Fragment>
        )}
      </Wrapper>
    );
  }
}

InstructorPanel.defaultProps = {
  courses: [],
};

InstructorPanel.propTypes = {
  courses: shape({
    payload: array,
  }),
  getCourses: func.isRequired,
};

export default InstructorPanel;
