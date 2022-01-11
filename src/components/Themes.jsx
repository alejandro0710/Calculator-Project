import React from 'react';
import '@styles/Themes.scss';

const Themes = () => {
  return (
    <div className="themes">
      <div className="title">THEME</div>
      <div className="containThemes">
        <div className="numbers">
          <h4 className="number number-one">1</h4>
          <h4 className="number number-two">2</h4>
          <h4 className="number number-three">3</h4>
        </div>
        <div className="themeChange">
          <div className="numberChange number-three"></div>
          <div className="numberChange number-three"></div>
          <div className="numberChange number-three"></div>
          <div className="ballTheme"></div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
