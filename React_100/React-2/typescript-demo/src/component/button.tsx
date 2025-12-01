
type button={
    label:string,
    disabled:boolean,
    onclick:()=>void,
}
const Button = ({label,disabled,onclick}:button) => {
  return (
    <div>
        <h1>{label}</h1>
       <h1>{disabled ? "true":"false"}</h1>
       <button onClick={onclick} >{label}</button>
    </div>
  )
}

export default Button