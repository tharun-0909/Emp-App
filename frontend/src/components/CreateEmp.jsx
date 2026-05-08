import {useForm} from 'react-hook-form'
import {useState} from 'react'
import {useNavigate} from 'react-router'

function CreateEmp() {

  const[loading,setLoading]=useState(false)
  const[error,setError]=useState("")
  const navigate=useNavigate()

    // const{register,handleSubmit,formState:{errors}}=useForm()
    const { register, handleSubmit} = useForm();

  //form submit
  const onFormSubmit=async(newEmpObj)=>{
    try{
      setLoading(true)
      //make HTTP POST req
      const API_URL = import.meta.env.VITE_API_URL || "";
      let res=await fetch(`${API_URL}/emp-api/employees`,
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newEmpObj)
      }
    )
    if(res.status===201){
      //navigate to employees component programmatically
      navigate('/list')
    }
    else{
      let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason);
    }
    }
    catch(err){
      console.log("err in catch", err);
      setError(err.message)
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <div>
      <h1 className="text-center text-4xl mb-9">Create New Employee</h1>
      {
        error && <p className="text-red-600 text-center">{error}</p>
      }
      <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder='Enter the name' {...register("name")} className="mb-3 border p-3 w-full rounded-2xl"/>
        <input type="email" placeholder='Enter the email' {...register("email")} className="mb-3 border p-3 w-full rounded-2xl"/>
        <input type="number" placeholder='Enter the mobile number' {...register("mobile")} className="mb-3 border p-3 w-full rounded-2xl"/>
        <input type="text" placeholder='Enter the designation' {...register("designation")} className="mb-3 border p-3 w-full rounded-2xl"/>
        <input type="text" placeholder='Enter the Company Name' {...register("companyName")} className="mb-3 border p-3 w-full rounded-2xl"/>
        <button type="submit" className="block mx-auto p-4 bg-violet-300 rounded-3xl hover:bg-indigo-300">Create Employee</button>
        {loading && <p className="text-center mt-2">Loading....</p>}
      </form>
    </div>
  )
}

export default CreateEmp