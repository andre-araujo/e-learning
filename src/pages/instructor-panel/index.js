import { Fragment } from 'react';
import withAuthenticatedRoute from '../../_HOCs/withAuthenticatedRoute';

function InstructorPanel() {
  return (
    <Fragment>
      <h1>
        Dashboard
      </h1>
    </Fragment>
  );
}

export default withAuthenticatedRoute(InstructorPanel);
