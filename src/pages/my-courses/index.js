import { Fragment } from 'react';
import withAuthenticatedRoute from '../../_HOCs/withAuthenticatedRoute';
import { DefaultContent } from '../../components';

function Dashboard() {
  return (
    <Fragment>
      <DefaultContent
        title="Você ainda não se inscreveu em nenhum curso."
        description="Se inscreva em cursos para ampliar seus conhecimentos."
        linkText="Ir para lista de cursos"
        href="/"
      />
    </Fragment>
  );
}

export default withAuthenticatedRoute(Dashboard);
