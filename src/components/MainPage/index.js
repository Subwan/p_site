import React from 'react';

import OpenSection from './OpenSection';
import MainSection from './MainSection';
import Footer from './Footer';

const MainPage = (props) => {
  const clientHeight = document.documentElement.clientHeight;

  return (
    <>
      <OpenSection clientHeight={clientHeight} />
      <MainSection clientHeight={clientHeight} />
      {/* <Footer /> */}
    </>
  );
};

export default MainPage;
