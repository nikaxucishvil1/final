
const Button = (props:button) => {
    const {type,children,className,onClick} = props
  return (
    <button type={type} onClick={onClick} className={className}>{children}</button>
  )
}

export default Button