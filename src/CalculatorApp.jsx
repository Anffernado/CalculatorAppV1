//Hooks
import { useState, useEffect } from 'react'

//Components
import { Display } from './components/Display.jsx';
import { KeypadFeatures } from './components/KeypadFeatures.jsx';
import { KeypadOperators } from './components/KeypadOperators.jsx';
import { KeypadNumbers } from './components/KeypadNumbers.jsx';


const CalculatorApp = () => {
  //States
  const [operation, setOperation] = useState({
    op1: '',
    op2: '',
    operator: '',
    result: ''
  });
  const [view, setView] = useState('0')

  useEffect(() => {
    //localStorage.clear();
    console.log(operation);
  }, [operation]);

  return (
    <>
      {/*APP*/}
      <Display
        stateOperation={operation}
        stateView={view}
        onChangeOperation={setOperation}
        onChangeView={setView} />
      <div className='keypad-container'>
        <KeypadFeatures
          stateOperation={operation}
          onChangeOperation={setOperation}
          onChangeView={setView} />
        <KeypadNumbers
          stateOperation={operation}
          onChangeOperation={setOperation}
          onChangeView={setView} />
        <KeypadOperators
          stateOperation={operation}
          onChangeOperation={setOperation}
          onChangeView={setView} />
      </div>
    </>
  )
}

export default CalculatorApp;