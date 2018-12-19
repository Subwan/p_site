import React from 'react';

import { OPEN_PAGE_TEXT } from '../../../constants/text';
import './style.scss';

const OpenSection = (props) => {
  return (
    <div className="open-block__container" style={{ height: props.clientHeight }}>
      <div className="open-block__img-container">
        <img
          className="open-block__img"
          src="00fab6951cf6a1f9946acc3d4225ad84.jpg"
          alt="нам тоже жаль что изображение не загрузилось"
        />
      </div>
      <div className="open-block__text-container">
        <div className="open-block__text">{OPEN_PAGE_TEXT}</div>
      </div>
    </div>
  );
}

export default OpenSection;
