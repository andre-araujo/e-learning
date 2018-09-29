import { Fragment } from 'react';
import { withRouter } from 'next/router';
import withAuthenticatedRoute from '../../_HOCs/withAuthenticatedRoute';
import CourseDetails from '../../components/features/CourseDetails';
import CourseList from '../../components/features/CourseList';

function Courses({ router: { query } }) {
  return (
    <Fragment>
      {
        query.id && (
          <CourseDetails id={query.id} />
        )
      }
      {
        !query.id && (
          <CourseList />
        )
      }
    </Fragment>
  );
}

export default withRouter(withAuthenticatedRoute(Courses));
