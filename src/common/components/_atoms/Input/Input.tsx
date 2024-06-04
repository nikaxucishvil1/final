
const Input = (props:Input) => {
    const {type,placeholder,className} = props
  return (
    <input className={className} placeholder={placeholder} type={type} />
  )
}

export default Input