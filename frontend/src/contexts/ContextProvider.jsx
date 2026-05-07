import {createContext,useState} from 'react'

//create context provider object
export const counterContextObject=createContext()
function ContextProvider({children}) {
    //state
    const[counter,setCounter]=useState(0)
    //functions to change state
    const changeCounter=()=>{
        setCounter(counter+1)
    }
  return (
    <counterContextObject.Provider value={{counter,changeCounter}}>
        {children}
    </counterContextObject.Provider>
  )
}

export default ContextProvider