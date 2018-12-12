import React from 'react';

import OpenBlock from './OpenBlock';
import SecondBlock from './SecondBlock';
import Footer from './Footer';

class MainPage extends React.PureComponent {
  state = {
    clientHeight: document.documentElement.clientHeight,
    yOffset: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const newYOffset = window.pageYOffset;
    this.setState({
      yOffset: newYOffset,
    });
  }

  render() {
    return (
      <>
        <OpenBlock clientHeight={this.state.clientHeight} />
        <SecondBlock clientHeight={this.state.clientHeight} yOffset={this.state.yOffset} />
        {/* <Footer /> */}
      </>
    );
  }
};

export default MainPage;
