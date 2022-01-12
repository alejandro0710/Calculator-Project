import React from 'react';
import { useContexts } from '@hooks/useContexts';
import '@styles/Header.scss';

const Header = () => {
  const { screen, result } = useContexts();

  return (
    <div className="header">
      <h2 className="title">calc </h2>
      <div className="screen">
        <div className="p p1 mathOperation">
          {screen} {result}
        </div>
      </div>
    </div>
  );
};

export { Header };
