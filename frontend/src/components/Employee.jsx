import {useLocation} from 'react-router'

function Employee() {
  //read state received in navigation
  const {state}=useLocation()
  return (
    <div className="text-center text-4xl text-violet-500 font-serif shadow-fuchsia-400 shadow-2xl p-10">
      <p className="m-5">Email: {state.email}</p>
      <p className="m-5">Name: {state.name}</p>
      <p className="m-5">Mobile: {state.mobile}</p>
      <p className="m-5">Designation: {state.designation}</p>
      <p className="m-5">Company Name: {state.companyName}</p>
    </div>
  )
}

export default Employee