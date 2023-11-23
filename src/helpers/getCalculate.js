const getCalculate = (state) => {

  const { op1, op2, operator } = state;

  if (operator === '+') {
    return (Number(op1) + Number(op2));
  }

  if (operator === '-') {
    return (Number(op1) - Number(op2));
  }

  if (operator === '*') {
    return (Number(op1) * Number(op2));
  }

  if (operator === '/') {
    return (Number(op1) / Number(op2));
  }

}

export {
  getCalculate
}