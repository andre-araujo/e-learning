import { Fragment } from 'react';
import withAuthenticatedRoute from '../../../_HOCs/withAuthenticatedRoute';
import UsersReport from '../../../components/features/UsersReport';

function UsersReportPage() {
  return (
    <Fragment>
      <UsersReport />
    </Fragment>
  );
}

export default withAuthenticatedRoute(UsersReportPage);
