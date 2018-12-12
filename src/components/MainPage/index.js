import React from 'react';

import OpenBlock from './OpenBlock';
import SecondBlock from './SecondBlock';
import Footer from './Footer';

const MainPage = (props) => {
  const clientHeight = document.documentElement.clientHeight;

  return (
    <>
      <OpenBlock clientHeight={clientHeight} />
      <SecondBlock clientHeight={clientHeight} />
      <Footer />
    </>
  );
}

export default MainPage;
