import {NavLink} from 'react-router'

function Header() {
  return (
    <nav className="flex justify-end gap-11 p-5 bg-violet-200 font-semibold text-violet-600">
      <NavLink to="" className={({isActive})=>(isActive?"text-violet-800":"hover:text-blue-600")}>Home</NavLink>
      <NavLink to="create-emp" className={({isActive})=>(isActive?"text-blue-800":"hover:text-violet-700")}>Create Employee</NavLink>
      <NavLink to="list" className={({isActive})=>(isActive?"text-blue-800":"hover:text-violet-700")}>List of Employees</NavLink>
    </nav>
  )
}

export default Header