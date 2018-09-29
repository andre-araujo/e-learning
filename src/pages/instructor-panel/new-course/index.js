import { Fragment } from 'react';
import withAuthenticatedRoute from '../../../_HOCs/withAuthenticatedRoute';
import { CourseCreation } from '../../../components';

function InstructorPanel() {
  return (
    <Fragment>
      <CourseCreation />
    </Fragment>
  );
}

export default withAuthenticatedRoute(InstructorPanel);
