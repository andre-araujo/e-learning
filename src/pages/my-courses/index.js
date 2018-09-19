import { Fragment } from 'react';
import withAuthenticatedRoute from '../../_HOCs/withAuthenticatedRoute';
import CourseList from '../../components/features/CourseList';

function Dashboard() {
  return (
    <Fragment>
      <CourseList hideUnsubscribed />
    </Fragment>
  );
}

export default withAuthenticatedRoute(Dashboard);
