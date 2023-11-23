const Button = ({ onHandleClick, type, children }) => {
  if(children === '.') {
    return (
      <button type='button' className="button-number-dot button-special" onClick={onHandleClick}>{children}</button>
    )
  }

  if(children === '0') {
    return (
      <button type='button' className="button-number-0 button-special" onClick={onHandleClick}>{children}</button>
    )
  }

  return (
    <button type='button' className={`button-${type}-${children} button-number`} onClick={onHandleClick}>{children}</button>
  )
}

export {
  Button
}