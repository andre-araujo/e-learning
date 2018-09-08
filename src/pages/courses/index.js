import { Fragment } from 'react';
import withAuthenticatedRoute from '../../_HOCs/withAuthenticatedRoute';

function Courses() {
  return (
    <Fragment>
      Courses
    </Fragment>
  );
}

export default withAuthenticatedRoute(Courses);
