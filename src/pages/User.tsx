import {Link, useSearchParams} from 'react-router-dom'

function User() {
  const [params, _] = useSearchParams()
  console.log(params.get('qq'))
  console.log(params.get('str'))
  console.log(params.getAll('name'))
  return (
    <div>
      user
      <ul>
        <li>
          <Link to={'/user/detail/1'}>用户1</Link>
        </li>
        <li>
          <Link to={'/user/detail/2'}>用户2</Link>
        </li>
      </ul>
    </div>
  )
}
export default User
