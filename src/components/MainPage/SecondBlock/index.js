import React from 'react';

import { TN_12 } from '../../../constants/triangle';
import { SECOND_BLOCK_FIRST_ITEM_TEXT } from '../../../constants/text';
import './style.scss';

const SecondBlock = (props) => {
  const clientWidth = document.documentElement.clientWidth;
  const marginTop = clientWidth * TN_12;

  return (
    <div className="second-block__container" style={{height: props.clientHeight}}>
      <div className="second-block__triangle" style={{height: marginTop}} />
      <div
        className="second-block__text-block"
        style={{top: marginTop, height: props.clientHeight - marginTop}}
      >
        {SECOND_BLOCK_FIRST_ITEM_TEXT}
      </div>
    </div>
  );
}

export default SecondBlock;