import React from 'react';

import { SECTION_OF_COUREAGE_BUTTONS } from '../../../../constants/text';
import YandexPaymentModal from '../../../Modals/YandexPaymentModal'

import './style.scss';

class SectionOfCourage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }

    this.containerRef = React.createRef();
  }

  componentDidMount() {
    const elements = document.querySelectorAll('.section-of-coureage__item-button');
    elements.forEach((element) => {
      this.observer.observe(element);
    })
  }


  onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.style.webkitAnimationPlayState = "running";
      }
    });
  }

  options = {
    threshold: 1,
  };

  observer = new IntersectionObserver(this.onEntry, this.options);

  openModal = () => {
    this.setState({
      modalVisible: true,
    });
  }

  closeModal = () => {
    this.setState({
      modalVisible: false,
    });
  }

  renderRow = (text, position = 'right') => (
    <li
      key={text}
      className={
        `section-of-courage__item-container
        ${position === 'right'
          ? 'section-of-courage__item-container_right'
          : 'section-of-courage__item-container_left'
        }
      `}
    >
      <button
        className={
          `section-of-coureage__item-button
          ${position === 'right'
            ? 'section-of-coureage__item-button_right-animation'
            : 'section-of-coureage__item-button_left-animation'
          }
        `}
        onClick={() => this.openModal()}
      >
        {text}
      </button>
    </li>
  );

  buttonBlock = SECTION_OF_COUREAGE_BUTTONS.map(item => (
    this.renderRow(item.text, item.position)
  ));

  handleScroll = () => {
    const listBlock = this.containerRef.current;
    if (listBlock && listBlock.getBoundingClientRect().top < 0) {
      listBlock.style.backgroundPosition = `50% ${listBlock.getBoundingClientRect().top / 5}px`;
    }
  }

  render() {
    this.handleScroll();
    return (
      <>
        <ul ref={this.containerRef} className="section-of-courage__container">
          {this.buttonBlock}
        </ul>
        <YandexPaymentModal modalVisible={this.state.modalVisible} closeModal={() => this.closeModal()} />
      </>
    )
  }
}

export default SectionOfCourage;
