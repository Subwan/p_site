import React from 'react';

import { ITEM_OF_WISDOM_WIDTH } from '../../../../constants/styling';

import './style.scss';

class SectionOfWisdom extends React.PureComponent {
  constructor(props) {
    super(props);

    this.firstItemRef = React.createRef();
    this.secondItemRef = React.createRef();
    this.thirdItemRef = React.createRef();
  }

  componentDidMount() {
    const pixelWidth = (this.props.clientWidth * ITEM_OF_WISDOM_WIDTH) / 100;
    const pixelToMove = pixelWidth + this.firstItemRef.current.getBoundingClientRect().left + 10;

    this.firstItemRef.current.style.transform = `translateX(${-pixelToMove}px)`;
    this.thirdItemRef.current.style.transform = `translateX(${pixelToMove}px)`;
  }

  handleScroll = () => {
    if (this.props.yOffset > this.props.clientHeight * 1.8) {
      this.firstItemRef.current.style.transform = "translateX(0)";
      setTimeout(() => {
        this.thirdItemRef.current.style.transform = "translateX(0)";
      }, 700);
      setTimeout(() => {
        this.secondItemRef.current.style.opacity = 1;
        this.secondItemRef.current.style.transform = "scale(1)";
      }, 1600);
    }
  }

  render() {
    this.handleScroll();
    return (
      <div
        className="section-of-wisdom__container"
        style={{ height: this.props.clientHeight }}
      >
        <div
          className="section-of-wisdom__item section-of-wisdom__item_transform"
          ref={this.firstItemRef}
        >
        </div>
        <div
          className="section-of-wisdom__item section-of-wisdom__second-item"
          ref={this.secondItemRef}
        >
        </div>
        <div
          className="section-of-wisdom__item section-of-wisdom__item_transform"
          ref={this.thirdItemRef}
        >
        </div>
      </div>
    );
  }
}

export default SectionOfWisdom;
