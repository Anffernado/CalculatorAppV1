const getOperating = ({op1, op2, operator}) => {

  if(!operator && !op2) {
    return ['op1', op1];
  }

  if(operator && op1) {
    return ['op2', op2];
  }

}

export {
  getOperating
}