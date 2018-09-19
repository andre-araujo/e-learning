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
    children, className, render, title, fullScreen,
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
            data.setFullScreen(fullScreen);
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
    fullScreen: false,
  };

  componentDidMount() {
    Router.onRouteChangeComplete = () => {
      const { isOpen } = this.state;

      if (isOpen) {
        this.setState({
          isOpen: false,
          render: null,
          title: '',
          fullScreen: false,
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

  setFullScreen = (fullScreen) => {
    this.setState({ fullScreen });
  }

  toggleModal = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    const {
      toggleModal, setRenderComponent, setTitle, setFullScreen,
    } = this;
    const { children } = this.props;
    const {
      isOpen, render, title, fullScreen,
    } = this.state;

    return (
      <ModalContext.Provider value={
        {
          isOpen,
          toggleModal,
          setRenderComponent,
          setTitle,
          setFullScreen,
        }
      }
      >
        <Children isOpen={isOpen}>
          {children}
        </Children>
        {isOpen && (
          <Container aria-label="oppened modal" isOpen={isOpen} fullScreen={fullScreen}>
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
                  {typeof render === 'function' ? render({ isOpen, toggleModal }) : render}
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
