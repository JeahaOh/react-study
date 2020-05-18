import React from 'react';
import { useLocation } from 'react-router-dom';

const LeftMenu = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  //console.log(isHome);
  return isHome ? (
    <></>
  ) : (
    <>
      <div>LeftMenu AREA</div>
    </>
  );
};

export default LeftMenu;
