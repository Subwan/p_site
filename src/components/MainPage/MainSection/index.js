import React from 'react';

import { ANGLE } from '../../../constants/styling';
import SectionOfPower from './SectionOfPower';
import SectionOfWisdom from './SectionOfWisdom';
import SectionOfCourage from './SectionOfCourage';

class MainSection extends React.PureComponent {
  state = {
    yOffset: 0,
  }

  getTanDeg = (deg) => {
    const rad = deg * Math.PI / 180;
    return Math.tan(rad);
  }

  clientWidth = document.documentElement.clientWidth;
  marginTop = this.clientWidth * this.getTanDeg(ANGLE);

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
        <SectionOfPower
          clientHeight={this.props.clientHeight}
          clientWidth={this.clientWidth}
          yOffset={this.state.yOffset}
          marginTop={this.marginTop}
        />
        <SectionOfWisdom
          clientHeight={this.props.clientHeight}
          clientWidth={this.clientWidth}
          yOffset={this.state.yOffset}
        />
        <SectionOfCourage yOffset={this.state.yOffset} />
      </>
    );
  }
}

export default MainSection;