
const CheckoutInput = (props:COInput) => {
    const {label,InputType,Placeholder,InputName,className} = props
  return (
    <div>
        <p>{label}</p>
        <input className={className} type={InputType} name={InputName} placeholder={Placeholder} />
    </div>
  )
}

export default CheckoutInput