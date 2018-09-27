import React, { Fragment } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { func } from 'prop-types';

import {
  Container,
} from './UserMenu.styles';

import { deepSelect } from '../../../lib/utils';
import { InternalLink } from '../..';

function UserMenu({
  logout,
  authentication,
}) {
  if (!authentication.token) return null;
  const isAdmin = deepSelect(authentication, 'getUser.account.admin');

  return (
    <Container>
      {
        isAdmin && (
          <Fragment>
            <InternalLink gap={30} href="/instructor-panel" prefetch>
              Painel do Instrutor
            </InternalLink>
            <InternalLink gap={30} href="/instructor-panel/users-report" prefetch>
              Relatório de usuários
            </InternalLink>
          </Fragment>
        )
      }
      {
        !isAdmin && (
          <Fragment>
            <InternalLink gap={30} href="/courses" prefetch>
              Cursos
            </InternalLink>
          </Fragment>
        )
      }
      <InternalLink gap={30} href="/" onClick={logout} prefetch>
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
