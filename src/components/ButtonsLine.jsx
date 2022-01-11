import React from 'react';
import '@styles/ButtonsLine.scss';

const ButtonsLine = ({
  valueOne,
  valueTwo,
  valueThree,
  valueFour,
  valueForOperation,
}) => {
  return (
    <div className="buttonsLine">
      <button
        onClick={() => {
          valueForOperation(valueOne);
        }}
        className="button"
      >
        {valueOne}
      </button>
      <button
        onClick={() => {
          valueForOperation(valueTwo);
        }}
        className="button"
      >
        {valueTwo}
      </button>
      <button
        onClick={() => {
          valueForOperation(valueThree);
        }}
        className="button"
      >
        {valueThree}
      </button>
      <button
        onClick={() => {
          if (valueFour == ' % ') {
            console.log('Precionaste la tecla modulo ');
          }
          if (valueFour == ' + ') {
            console.log('Precionaste la tecla para sumar ');
          }
          if (valueFour == ' - ') {
            console.log('Precionaste la tecla para restar ');
          }
          if (valueFour == ' * ') {
            console.log('Precionaste la tecla para multiplicar ');
          } else {
            valueFour;
          }

          valueForOperation(
            valueFour == ' % ' ? ' % ' : valueFour,
            valueFour == ' + ' ? ' + ' : valueFour,
            valueFour == ' - ' ? ' - ' : valueFour,
            valueFour == ' * ' ? ' * ' : valueFour
          );
        }}
        className="button"
      >
        {valueFour}
      </button>
    </div>
  );
};

export { ButtonsLine };
