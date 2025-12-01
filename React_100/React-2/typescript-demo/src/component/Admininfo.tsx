import { Infoc } from "../type"

type AdmininfoProps={
    admin:Infoc
}
const Admininfo: React.FC<AdmininfoProps>= ({admin}) => {
  return (
    <div>
        <h1>{admin.name}</h1>
    <h1>{admin.role}</h1>
    <h1>{admin.login.toLocaleString()}</h1>
</div>
  )
}

export default Admininfo