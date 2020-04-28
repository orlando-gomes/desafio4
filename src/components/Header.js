import React from 'react';

import image from './../assets/images.jpg';

function Header() {
  return(
    <>
      <div className="header">
      <div className="htitle">facebook</div>
      <img className="himage" src={image} />
      <div className="hlink">Meu perfil</div>
      </div>
    </>
  );
}

export default Header;
