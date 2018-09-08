import { Fragment } from 'react';
import { withRouter } from 'next/router';
import withAuthenticatedRoute from '../../_HOCs/withAuthenticatedRoute';
import CourseDetails from '../../components/features/CourseDetails';

function Courses({ router: { query } }) {
  return (
    <Fragment>
      {
        query.id && (
          <CourseDetails id={query.id} />
        )
      }
    </Fragment>
  );
}

export default withRouter(withAuthenticatedRoute(Courses));
