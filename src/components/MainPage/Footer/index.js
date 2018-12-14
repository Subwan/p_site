import React from 'react';

import { FOOTER_TEXT } from '../../../constants/text';

import './style.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text">
          {FOOTER_TEXT}
        </div>
        <a
          className="footer__vk" 
          href="https://vk.com/pdrilka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-vk footer__icon"></span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
