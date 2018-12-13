import React from 'react';

import {
  SECTION_OF_POWER_TEXT,
  SECTION_OF_POWER_HEADER_TEXT,
} from '../../../../constants/text';

const SectionOfPower = (props) => {

  const handleAnimation = () => {
    return props.yOffset > (props.clientHeight / 2) ? 'section-of-power__header-text_animate' : '';
  }

  return (
    <div className="section-of-power__container" style={{ height: props.clientHeight }}>
      <div className="section-of-power__header">
        <div 
          className={`section-of-power__header-text ${handleAnimation()}`}
        >
          {SECTION_OF_POWER_HEADER_TEXT}
        </div>
      </div>
      <div className="section-of-power__triangle" style={{ height: props.marginTop }} />
      <div
        className="section-of-power__text-block"
        style={{ top: props.marginTop, height: props.clientHeight - props.marginTop }}
      >
        {SECTION_OF_POWER_TEXT}
      </div>
    </div>
  )
}

export default SectionOfPower;
