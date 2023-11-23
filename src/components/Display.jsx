import { getOperating } from "../helpers/getOperating.js";

const Display = ({ stateOperation, stateView, onChangeOperation, onChangeView }) => {

  const [property, value] = getOperating(stateOperation);

  const handleClick = (e) => {
    /*Handle Event*/
    console.log('HandleClick - Display Actived ✔');

    /*Eliminar el ultimo caracter*/
    const newValue = value.slice(0, -1);

    /*Actualizar los estados*/
    if(stateOperation.result) {
      return;
    }

    if (stateView.length === 1) {
      onChangeOperation({ ...stateOperation, [property]: newValue });
      onChangeView('0');
      return;
    }

    onChangeOperation({ ...stateOperation, [property]: newValue });
    onChangeView(newValue);
    return;
  }


  return (
    <div className="display">
      <p className="display-operations">{stateView}</p>
      <button className="button-display" onClick={handleClick}>{'<'}</button>
    </div>
  )

}

export {
  Display
}