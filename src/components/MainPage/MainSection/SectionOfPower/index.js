import React from 'react';

import {
  SECTION_OF_POWER_TEXT,
  SECTION_OF_POWER_HEADER_TEXT,
} from '../../../../constants/text';

import './style.scss';

class SectionOfPower extends React.PureComponent {

  headerRef = React.createRef()

  handleAnimation = () => {
    if (this.props.yOffset > (this.props.clientHeight / 2)) {
      this.headerRef.current.style.webkitAnimationPlayState = "running";
    }
  }

  render() {
    this.handleAnimation();
    return (
      <div className="section-of-power__container" style={{ height: this.props.clientHeight }}>
        <div className="section-of-power__header">
          <div
            ref={this.headerRef}
            className="section-of-power__header-text"
          >
            {SECTION_OF_POWER_HEADER_TEXT}
          </div>
        </div>
        <div className="section-of-power__triangle" style={{ height: this.props.marginTop }} />
        <div
          className="section-of-power__text-block"
          style={{ top: this.props.marginTop, height: this.props.clientHeight - this.props.marginTop }}
        >
          {SECTION_OF_POWER_TEXT}
        </div>
      </div>
    )
  }
}

export default SectionOfPower;
