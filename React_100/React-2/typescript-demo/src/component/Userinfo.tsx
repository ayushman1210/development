import { Info}  from '../type'

type userinfoprops={
    user:Info,
}
const Userinfo: React.FC<userinfoprops> = ({user}) => {
  return (
    <div>
        <h1>{user.name}</h1>
    <h2>{user.email}</h2>
    <h3>{user.id}</h3>
    </div>
  )
}

export default Userinfo