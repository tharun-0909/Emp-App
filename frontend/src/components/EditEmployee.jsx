import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function EditEmployee() {
  // const {register,handleSubmit,formState:{errors}}=useForm()
  //get empObj from navigate hook
  const [error, setError] = useState("");
  const { state } = useLocation();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  console.log(state);
  useEffect(() => {
    setValue("name", state.name);
    setValue("email", state.email);
    setValue("mobile", state.mobile);
    setValue("designation", state.designation);
    setValue("companyName", state.companyName);
  }, []);

  const saveModifiedEmp = async (modifiedEmp) => {
    //make HTTP PUT req to update employee details
    
    try{
      const API_URL = import.meta.env.VITE_API_URL || "";
      const res = await axios.put(
      `${API_URL}/emp-api/employees/${state._id}`,
      modifiedEmp,
    );
    if (res.status === 200) {
      //navigate to employees component programmatically
      navigate("/list");
    }
    }catch(err){
      console.log("err in catch", error);
      setError(err.message)
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl mb-9">Edit Employee</h1>
      <form
        className="w-full max-w-md mx-auto"
        onSubmit={handleSubmit(saveModifiedEmp)}
      >
        <input
          type="text"
          placeholder="Enter the name"
          {...register("name")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter the email"
          {...register("email")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="number"
          placeholder="Enter the mobile number"
          {...register("mobile")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter the designation"
          {...register("designation")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter the Company Name"
          {...register("companyName")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <button
          type="submit"
          className="block mx-auto p-4 bg-violet-300 rounded-3xl hover:bg-indigo-300"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;
