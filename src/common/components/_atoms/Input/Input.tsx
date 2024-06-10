
const Input = (props:Input) => {
    const {type,placeholder,className,name,onchange,value,onBlur} = props
  return (
    <input required onBlur={onBlur} className={className} name={name} value={value} onChange={onchange} placeholder={placeholder} type={type} />
  )
}

export default Input