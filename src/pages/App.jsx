import React, { useState } from 'react';
import { Header } from '@containers/Header';
import { CalculatorKeys } from '@containers/CalculatorKeys';
import { AppContext } from '@context/AppContext';
import '@styles/Global.scss';

const App = () => {
  const [screen, setScreen] = useState('');
  const [result, setResult] = useState('');

  const values = screen.split(' ');
  let operador = '';

  const operations = () => {
    if (values[1] == '+') {
      operador = Number(values[0]) + Number(values[2]);
      console.log('valor de suma');
    }
    if (values[1] == '-') {
      operador = Number(values[0]) - Number(values[2]);
      console.log('valor de resta');
    }
    if (values[1] == '*') {
      operador = Number(values[0]) * Number(values[2]);
      console.log('valor de multiplicacion');
    }
    if (values[1] == '/') {
      operador = Number(values[0]) / Number(values[2]);
      console.log('valor de divicion');
    }
    if (values[1] == '%') {
      operador = Number(values[0]) % Number(values[2]);
      console.log('valor de divicion');
    }

    if (values[3] == '+') {
      operador = operador + Number(values[4]);
    }
    if (values[3] == '-') {
      operador = operador - Number(values[4]);
    }
    if (values[3] == '*') {
      operador = operador * Number(values[4]);
    }
    if (values[3] == '/') {
      operador = operador / Number(values[4]);
    }
    if (values[3] == '%') {
      operador = operador % Number(values[4]);
    }

    if (values[5] == '+') {
      operador = operador + Number(values[6]);
    }
    if (values[5] == '-') {
      operador = operador - Number(values[6]);
    }
    if (values[5] == '*') {
      operador = operador * Number(values[6]);
    }
    if (values[5] == '/') {
      operador = operador / Number(values[6]);
    }
    if (values[5] == '%') {
      operador = operador % Number(values[6]);
    }

    if (values[7] == '+') {
      operador = operador + Number(values[8]);
    }
    if (values[7] == '-') {
      operador = operador - Number(values[8]);
    }
    if (values[7] == '*') {
      operador = operador * Number(values[8]);
    }
    if (values[7] == '/') {
      operador = operador / Number(values[8]);
    }
    if (values[7] == '%') {
      operador = operador % Number(values[8]);
    }

    if (values[9] == '+') {
      operador = operador + Number(values[10]);
    }
    if (values[9] == '-') {
      operador = operador - Number(values[10]);
    }
    if (values[9] == '*') {
      operador = operador * Number(values[10]);
    }
    if (values[9] == '/') {
      operador = operador / Number(values[10]);
    }
    if (values[9] == '%') {
      operador = operador % Number(values[10]);
    }

    if (values[11] == '+') {
      operador = operador + Number(values[12]);
    }
    if (values[11] == '-') {
      operador = operador - Number(values[12]);
    }
    if (values[11] == '*') {
      operador = operador * Number(values[12]);
    }
    if (values[11] == '/') {
      operador = operador / Number(values[12]);
    }
    if (values[11] == '%') {
      operador = operador % Number(values[12]);
    }

    if (values[13] == '+') {
      operador = operador + Number(values[14]);
    }
    if (values[13] == '-') {
      operador = operador - Number(values[14]);
    }
    if (values[13] == '*') {
      operador = operador * Number(values[14]);
    }
    if (values[13] == '/') {
      operador = operador / Number(values[14]);
    }
    if (values[13] == '%') {
      operador = operador % Number(values[14]);
    }

    if (values[15] == '+') {
      operador = operador + Number(values[16]);
    }
    if (values[15] == '-') {
      operador = operador - Number(values[16]);
    }
    if (values[15] == '*') {
      operador = operador * Number(values[16]);
    }
    if (values[15] == '/') {
      operador = operador / Number(values[16]);
    }
    if (values[15] == '%') {
      operador = operador % Number(values[16]);
    }

    if (values[17] == '+') {
      operador = operador + Number(values[18]);
    }
    if (values[17] == '-') {
      operador = operador - Number(values[18]);
    }
    if (values[17] == '*') {
      operador = operador * Number(values[18]);
    }
    if (values[17] == '/') {
      operador = operador / Number(values[18]);
    }
    if (values[17] == '%') {
      operador = operador % Number(values[18]);
    } else {
      values[1];
    }

    console.log(operador);
    setScreen(`${screen == '' ? '' : ''}`);
    setResult(operador);
  };

  return (
    <AppContext.Provider
      className="containerMain"
      value={{
        screen,
        setScreen,
        setResult,
        operations,
        result,
        setResult,
      }}
    >
      <div className="calcContain">
        <Header />
        <CalculatorKeys />
      </div>
    </AppContext.Provider>
  );
};

export default App;
