import { Button } from "./Button.jsx";
import { getOperating } from "../helpers/getOperating.js"


const KeypadFeatures = ({ stateOperation, onChangeOperation, onChangeView }) => {

  const features = ['A/C', '+/-', '%']

  const handleClick = (e) => {

    const buttonValue = e.target.textContent;

    if (buttonValue === 'A/C') {
      onChangeOperation({ op1: '', op2: '', operator: '', result: '' });
      onChangeView('0');
      return;
    }

    return;
  }

  return (
    <div className='keypad-features'>
      {features.map((feature) => { return (<Button key={feature} type={'feature'} onHandleClick={handleClick}>{feature}</Button>) })}
    </div>
  )
}

export {
  KeypadFeatures
} 