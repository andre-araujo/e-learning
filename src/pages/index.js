import { Fragment } from 'react';

import Header from '../components/modules/Header';
import Hero from '../components/modules/Hero';
import Authentication from '../components/features/Authentication';

export default function Home() {
  return (
    <Fragment>
      <Header addOn={<Authentication />} />
      <Hero
        imageUrl="https://images.unsplash.com/photo-1494707924465-e1426acb48cb?ixlib=rb-0.3.5&s=06a3576d1ba3e5a1246005e8cc79798b&auto=format&fit=crop&w=1350&q=80"
        title="Aprenda e ensine"
      />
    </Fragment>
  );
}
