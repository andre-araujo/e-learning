import { Component, createContext } from 'react';
import Router from 'next/router';
import { node } from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import {
  Container,
  Outer,
  Inner,
  Header,
  Content,
  Button,
  Close,
  Children,
} from './styles';

const ModalContext = createContext();

class ModalProvider extends Component {
  static Toggle = ({
    children, className, render, title,
  }) => (
    <ModalContext.Consumer>
      {data => (
        <Button
          type="button"
          aria-label="toggle modal"
          onClick={() => {
            data.toggleModal();
            data.setRenderComponent(render);
            data.setTitle(title);
          }}
          className={className}
        >
          {children}
        </Button>
      )}
    </ModalContext.Consumer>
  )

  state = {
    isOpen: false,
    render: null,
    title: '',
  };

  componentDidMount() {
    Router.onRouteChangeComplete = () => {
      const { isOpen } = this.state;

      if (isOpen) {
        this.setState({
          isOpen: false,
          render: null,
          title: '',
        });
      }
    };
  }

  componentWillUnmount() {
    Router.onRouteChangeComplete = undefined;
  }

  setRenderComponent = (render) => {
    this.setState({ render });
  }

  setTitle = (title) => {
    this.setState({ title });
  }

  toggleModal = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    const { children } = this.props;
    const { isOpen, render, title } = this.state;

    return (
      <ModalContext.Provider value={
        {
          isOpen,
          toggleModal: this.toggleModal,
          setRenderComponent: this.setRenderComponent,
          setTitle: this.setTitle,
        }
      }
      >
        <Children isOpen={isOpen}>
          {children}
        </Children>
        {isOpen && (
          <Container aria-label="oppened modal" isOpen={isOpen}>
            <Outer>
              <Inner>
                <Header>
                  {title}
                  <ModalProvider.Toggle>
                    <Close>
                      <FaTimes />
                    </Close>
                  </ModalProvider.Toggle>
                </Header>
                <Content>
                  {typeof render === 'function' ? render() : render}
                </Content>
              </Inner>
              <ModalProvider.Toggle className="overlay" />
            </Outer>
          </Container>
        )}
      </ModalContext.Provider>
    );
  }
}

ModalProvider.propTypes = {
  children: node.isRequired,
};

export default ModalProvider;
