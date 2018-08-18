import { Fragment } from 'react';

import Hero from '../components/modules/Hero';
import withAuthenticatedRoute from '../_HOCs/withAuthenticatedRoute';

function Home() {
  return (
    <Fragment>
      <Hero
        imageUrl="https://images.unsplash.com/photo-1494707924465-e1426acb48cb?ixlib=rb-0.3.5&s=06a3576d1ba3e5a1246005e8cc79798b&auto=format&fit=crop&w=1350&q=80"
        title="Aprenda e ensine"
      />
    </Fragment>
  );
}

export default withAuthenticatedRoute(Home);
