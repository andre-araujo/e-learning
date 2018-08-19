import { Fragment } from 'react';
import withAuthenticatedRoute from '../../_HOCs/withAuthenticatedRoute';
import { DefaultContent, CourseList } from '../../components';

function InstructorPanel() {
  return (
    <Fragment>
      <CourseList />
      <DefaultContent
        title="Você ainda não tem nenhum curso criado."
        description="Crie cursos e compartilhe seu conhecimento."
        linkText="Criar um novo curso"
        href="/instructor-panel/new-course"
      />
    </Fragment>
  );
}

export default withAuthenticatedRoute(InstructorPanel);
