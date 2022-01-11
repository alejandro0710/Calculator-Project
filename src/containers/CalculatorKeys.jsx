import React from 'react';
import { ButtonsLine } from '@components/ButtonsLine';
import { useContexts } from '@hooks/useContexts';

import '@styles/CalculatorKeys.scss';

const CalculatorKeys = () => {
  const { screen, setScreen, result, setResult, operations } = useContexts();

  const valueForOperation = (value) => {
    setResult('');
    setScreen([result, ...screen, value].join(''));
  };

  return (
    <div className="calculatorKeys">
      <ButtonsLine
        setScreen={setScreen}
        screen={screen}
        valueForOperation={valueForOperation}
        valueOne={7}
        valueTwo={8}
        valueThree={9}
        valueFour={' % '}
        screen={screen}
      />
      <ButtonsLine
        setScreen={setScreen}
        screen={screen}
        valueForOperation={valueForOperation}
        valueOne={4}
        valueTwo={5}
        valueThree={6}
        valueFour={' + '}
      />
      <ButtonsLine
        setScreen={setScreen}
        screen={screen}
        valueForOperation={valueForOperation}
        valueOne={1}
        valueTwo={2}
        valueThree={3}
        valueFour={' - '}
      />
      <ButtonsLine
        setScreen={setScreen}
        screen={screen}
        valueForOperation={valueForOperation}
        valueOne={'.'}
        valueTwo={0}
        valueThree={' / '}
        valueFour={' * '}
      />
      <button
        onClick={() => {
          setScreen('');
          setResult('');
        }}
        className="endButton Reset"
      >
        RESET
      </button>
      <button
        className="endButton EqualSign"
        onClick={() => {
          operations();
        }}
      >
        =
      </button>
    </div>
  );
};

export { CalculatorKeys };
