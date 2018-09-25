import Router from 'next/router';
import { connect } from 'react-redux';

import { deepSelect } from '../lib/utils';

import { Hero, Text } from '../components';
import Authentication from '../components/features/Authentication';

import withAuthenticatedRoute from '../_HOCs/withAuthenticatedRoute';

function Home({
  authentication,
}) {
  if (authentication.token) {
    Router.push(deepSelect(authentication, 'getUser.account.admin') ? '/instructor-panel' : '/courses');
  }

  return (
    <Hero
      minHeight="calc(100vh - 71px)"
      imageUrl="https://images.unsplash.com/photo-1494707924465-e1426acb48cb?ixlib=rb-0.3.5&s=06a3576d1ba3e5a1246005e8cc79798b&auto=format&fit=crop&w=1350&q=80"
    >
      <div style={{ textAlign: 'center' }}>
        <Text.Big tag="h1" color="white" margin="0 0 30px">
          LearningShelf
        </Text.Big>
        <Text.Title tag="h2" color="white" margin="0 0 10px">
          A plataforma de ensino
        </Text.Title>
        <Text.Subtitle tag="p" color="white" margin="0 0 10px">
          Crie ou entre uma conta para começar a aprender!
        </Text.Subtitle>
        <Authentication />
      </div>
    </Hero>
  );
}

const mapStateToProps = ({ authentication }) => ({ authentication });

export default withAuthenticatedRoute(connect(mapStateToProps)(Home));
