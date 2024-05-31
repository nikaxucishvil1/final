
const Button = (props:button) => {
    const {children,className} = props
  return (
    <button className={className}>{children}</button>
  )
}

export default Button