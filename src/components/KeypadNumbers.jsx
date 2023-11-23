import { Button } from "./Button.jsx";
import { getOperating } from "../helpers/getOperating.js";


const KeypadNumbers = ({ stateOperation, onChangeOperation, onChangeView }) => {

  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

  const [property, value] = getOperating(stateOperation);

  const handleClick = (e) => {
    /*Handle Event*/
    console.log('HandleClick - KeypadNumbers Actived ✔');

    const buttonValue = e.target.textContent;

    /*Concatenamos el nuevo valor*/
    const newValue = value + buttonValue;

    if (!value && e.target.textContent === '0') {
      onChangeOperation({ op1: '', op2: '', operator: '', result: '' });
      return;
    }

    /*Actualizar los estados*/
    onChangeOperation({ ...stateOperation, [property]: newValue });
    onChangeView(newValue);
    return;
  }

  return (
    <div className='keypad-numbers'>
      {numbers.map((number) => { return (<Button key={number} type={'number'} onHandleClick={handleClick}>{number}</Button>) })}
    </div>
  )
}

export {
  KeypadNumbers
} 