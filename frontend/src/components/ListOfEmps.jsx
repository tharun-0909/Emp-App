import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios'

function ListOfEmps() {
  const[emps,setEmps]=useState([])
  const navigate=useNavigate()

  const gotoEmployee=(empObj)=>{
    //navigate to employee component programmatically along with selected employee object
    navigate('/employee',{state:empObj})
  }

  const gotoEditEmployee=(empObj)=>{
    //navigate to employee component programmatically along with selected employee object
    navigate('/edit-emp',{state:empObj})
  }

  async function getEmps(){
      const API_URL = import.meta.env.VITE_API_URL || "";
      let res=await axios.get(`${API_URL}/emp-api/employees`)
      if(res.status==200){
        let resObj=res.data
        setEmps(resObj.payload)
      }
    }

  const deleteEmpById=async(id)=>{
    const API_URL = import.meta.env.VITE_API_URL || "";
    let res=await axios.delete(`${API_URL}/emp-api/employees/${id}`)
    if(res.status==200){
      getEmps()
    }

  }

  //get all emps on component loading
  useEffect(()=>{
    getEmps()
  },[])

  return (
    <div>
      <h1 className="text-4xl text-center mb-10 font-serif">List of Employees</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-violet-300 p-5 rounded-3xl text-center">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            {/* 3 buttons */}
            <div className="flex justify-around mt-4">
              <button className="bg-blue-400 p-3 rounded-2xl" onClick={()=>gotoEmployee(empObj)}>View</button>
              <button className="bg-green-400 p-3 rounded-2xl" onClick={()=>gotoEditEmployee(empObj)}>Edit</button>
              <button className="bg-red-400 p-3 rounded-2xl" onClick={()=>deleteEmpById(empObj._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListOfEmps