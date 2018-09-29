import { Fragment } from 'react';
import withAuthenticatedRoute from '../../_HOCs/withAuthenticatedRoute';
import InstructorPanel from '../../components/features/InstructorPanel';

function InstructorPanelPage() {
  return (
    <Fragment>
      <InstructorPanel />
    </Fragment>
  );
}

export default withAuthenticatedRoute(InstructorPanelPage);
