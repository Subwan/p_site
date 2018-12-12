import React from 'react';

import { TN_12 } from '../../../constants/triangle';
import {
  SECOND_BLOCK_FIRST_ITEM_TEXT,
  SECOND_BLOCK_FIRST_HEADER_TEXT,
} from '../../../constants/text';
import './style.scss';

class SecondBlock extends React.PureComponent {
  clientWidth = document.documentElement.clientWidth;
  marginTop = this.clientWidth * TN_12;

  render() {
    return (
      <div className="second-block__container" style={{ height: this.props.clientHeight }}>
        <div className="second-block__header">
          <div className="second-block__header-text">{SECOND_BLOCK_FIRST_HEADER_TEXT}</div>
        </div>
        <div className="second-block__triangle" style={{ height: this.marginTop }} />
        <div
          className="second-block__text-block"
          style={{ top: this.marginTop, height: this.props.clientHeight - this.marginTop }}
        >
          {SECOND_BLOCK_FIRST_ITEM_TEXT}
        </div>
      </div>
    );
  }
}

export default SecondBlock;