import { Button } from "./Button.jsx";
import { getCalculate } from "../helpers/getCalculate.js";

const KeypadOperators = ({ stateOperation, onChangeOperation, onChangeView }) => {

  const operators = ['/', 'x', '-', '+', '='];

  const { op1, op2, operator, result } = stateOperation;

  const handleClick = (e) => {

    /*Handle Event*/
    console.log('HandleClick - KeypadOperators Actived ✔');

    const buttonValue = e.target.textContent;

    if (buttonValue !== '=') {

      /*Si el operando-1 existe y resultado no existe, solo actualizamos el valor del operador*/
      if (op1 && !result) {
        onChangeOperation({ ...stateOperation, operator: buttonValue });
        return;
      }

      /*Si el resultado existe, cambiamos el valor del operando-1 a resultado, reseteamos el resultado*/
      if (result) {
        onChangeOperation({ ...stateOperation, op1: result, operator: buttonValue, result: '' });
        onChangeView(result);
        return;
      }

      console.log('Necesitas definir el operando 1');
      return;
    }

    if (buttonValue === '=') {

      //Si las 3 propertys no estan vacias, se procede al calculo
      if (op1 || op2 || operator) {
        const resultOperation = getCalculate(stateOperation);
        console.log({ ...stateOperation, result: resultOperation });
        onChangeOperation({ op1: '', op2: '', operator: '', result: resultOperation });
        onChangeView(resultOperation);
        return;
      }

      /*Si algunos de los 3 elementos esta "vacio" no se procede al calculo*/
      console.log('Necesitas los operandos y los operadores - test');
      return;
    }

    return;
  }

  return (
    <div className='keypad-operators'>
      {operators.map((operator) => { return (<Button key={operator} type={'operator'} onHandleClick={handleClick}>{operator}</Button>) })}
    </div>
  )
}

export {
  KeypadOperators
}