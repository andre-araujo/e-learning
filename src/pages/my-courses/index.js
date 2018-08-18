import { Fragment } from 'react';
import withAuthenticatedRoute from '../../_HOCs/withAuthenticatedRoute';

function Dashboard() {
  return (
    <Fragment>
      <h1>
        Dashboard
      </h1>
    </Fragment>
  );
}

export default withAuthenticatedRoute(Dashboard);
