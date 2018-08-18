import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { func } from 'prop-types';

import {
  Container,
} from './UserMenu.styles';

import { InternalLink } from '../..';

function UserMenu({
  logout,
  authentication,
}) {
  if (!authentication.token) return null;
  return (
    <Container>
      <InternalLink gap={30} href="/instructor-panel">
        Painel do Instrutor
      </InternalLink>
      <InternalLink gap={30} href="/my-courses">
        Meus Cursos
      </InternalLink>
      <InternalLink gap={30} href="/" onClick={logout}>
        <FaSignOutAlt />
      </InternalLink>
    </Container>
  );
}

UserMenu.defaultProps = {
  logout: null,
};

UserMenu.propTypes = {
  logout: func,
};

export default UserMenu;
