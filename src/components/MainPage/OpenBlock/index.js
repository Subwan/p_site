import React from 'react';

import { OPEN_PAGE_TEXT } from '../../../constants/text';
import './style.scss';

const OpenBlock = (props) => {
  return (
    <div className="open-block__container" style={{height: props.clientHeight}}>
      <img className="open-block__img" src="00fab6951cf6a1f9946acc3d4225ad84.jpg" />
      <div className="open-block__text">{OPEN_PAGE_TEXT}</div> 
    </div>
  );
}

export default OpenBlock;
