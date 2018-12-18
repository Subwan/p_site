import React from 'react';

import { SECTION_OF_COUREAGE_BUTTONS } from '../../../../constants/text';

import './style.scss';

const SectionOfCourage = (props) => {
  const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.style.webkitAnimationPlayState = "running";
      }
    });
  }

  let options = {
    threshold: 1,
  };

  const observer = new IntersectionObserver(onEntry, options);

  const elements = document.querySelectorAll('.section-of-coureage__item-button');

  elements.forEach((element) => {
    observer.observe(element);
  })

  const renderRow = (text, position = 'right') => (
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
      >
        {text}
      </button>
    </li>
  );

  const buttonBlock = SECTION_OF_COUREAGE_BUTTONS.map(item => (
    renderRow(item.text, item.position)
  ));

  return (
    <ul className="section-of-courage__container">
      {buttonBlock}
    </ul>
  )
}

export default SectionOfCourage;
