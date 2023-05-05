const Button = ({text, handleClick}) => {
  return (
    <button className="btn--select" onClick={handleClick}>{text}</button>
  )
}

export default Button