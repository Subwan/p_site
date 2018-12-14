import React from 'react';

import { ITEM_OF_WISDOM_WIDTH, MEDIA_WIDTH } from '../../../../constants/styling';
import img2018 from '../../../../assets/images/2018.jpg';
import img2017 from '../../../../assets/images/2017.jpg';
import img2016 from '../../../../assets/images/2016.jpg';

import './style.scss';

class SectionOfWisdom extends React.PureComponent {
  constructor(props) {
    super(props);

    this.firstItemRef = React.createRef();
    this.secondItemRef = React.createRef();
    this.thirdItemRef = React.createRef();

    this.firstItemTextRef = React.createRef();
    this.secondItemTextRef = React.createRef();
    this.thirdItemTextRef = React.createRef();
  }

  componentDidMount() {
    const pixelWidth = (this.props.clientWidth * ITEM_OF_WISDOM_WIDTH) / 100;
    const pixelToMove = pixelWidth + this.firstItemRef.current.getBoundingClientRect().left + 10;
    const shouldAnimate = this.props.yOffset > this.props.clientHeight * 1.8
      && this.props.clientWidth > MEDIA_WIDTH;

    if (shouldAnimate) {
      this.firstItemRef.current.style.transform = `translateX(${-pixelToMove}px)`;
      this.thirdItemRef.current.style.transform = `translateX(${pixelToMove}px)`;
    }
  }

  handleScroll = () => {
    const shouldAnimate = this.props.yOffset > this.props.clientHeight * 1.8
      && this.props.clientWidth > MEDIA_WIDTH;
    if (shouldAnimate) {
      this.firstItemRef.current.style.transform = "translateX(0)";
      setTimeout(() => {
        this.thirdItemRef.current.style.transform = "translateX(0)";
      }, 700);
      setTimeout(() => {
        this.secondItemRef.current.style.opacity = 1;
        this.secondItemRef.current.style.transform = "scale(1)";
      }, 1600);
      setTimeout(() => {
        this.firstItemTextRef.current.style.opacity = 1;
        this.secondItemTextRef.current.style.opacity = 1;
        this.thirdItemTextRef.current.style.opacity = 1;
      }, 2000);
    }
  }

  render() {
    this.handleScroll();
    return (
      <div
        className="section-of-wisdom__container"
        style={{ height: this.props.clientHeight }}
      >
        <a
          href="https://vk.com/wall-49039007_6763"
          target="_blank"
          rel="noopener noreferrer"
          className="section-of-wisdom-item_link"
        >
          <div
            className="section-of-wisdom-item section-of-wisdom-item_transform"
            ref={this.firstItemRef}
          >
            <div className="section-of-wisdom-item__img-block">
              <img
                className="section-of-wisdom-item__img"
                src={img2018}
                alt="2018"
              />
              <div className="section-of-wisdom-item__fade" />
              <div className="section-of-wisdom-item__img-text">МБФ</div>
            </div>
            <div
              className="section-of-wisdom-item__text"
              ref={this.firstItemTextRef}
            >
              Лучший обзор Первака 2018
            </div>
          </div>
        </a>
        <a
          href="https://vk.com/wall-49039007_5891"
          target="_blank"
          rel="noopener noreferrer"
          className="section-of-wisdom-item_link"
        >
          <div
            className="section-of-wisdom-item section-of-wisdom__second-item"
            ref={this.secondItemRef}
          >
            <div className="section-of-wisdom-item__img-block">
              <img
                className="section-of-wisdom-item__img section-of-wisdom-item__img_2017"
                src={img2017}
                alt="2018"
              />
              <div className="section-of-wisdom-item__fade" />
              <div className="section-of-wisdom-item__img-text">ФМО</div>
            </div>
            <div
              className="section-of-wisdom-item__text"
              ref={this.secondItemTextRef}
            >
              Лучший обзор Первака 2017
            </div>
          </div>
        </a>
        <a
          href="https://vk.com/wall-49039007_4046"
          target="_blank"
          rel="noopener noreferrer"
          className="section-of-wisdom-item_link"
        >
          <div
            className="section-of-wisdom-item section-of-wisdom-item_transform"
            ref={this.thirdItemRef}
          >
            <div className="section-of-wisdom-item__img-block">
              <img className="section-of-wisdom-item__img" src={img2016} alt="2018" />
              <div className="section-of-wisdom-item__fade" />
              <div className="section-of-wisdom-item__img-text">ГГиТ</div>
            </div>
            <div
              className="section-of-wisdom-item__text"
              ref={this.thirdItemTextRef}
            >
              Лучший обзор Первака 2016
            </div>
          </div>
        </a >
      </div >
    );
  }
}

export default SectionOfWisdom;
