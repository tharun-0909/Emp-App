import {useContext} from 'react'
import {counterContextObject} from '../contexts/ContextProvider'

function Home() {
  const {counter,changeCounter}=useContext(counterContextObject)
  return (
    <div>
      <h1 className='text-5xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='p-4 bg-amber-400'>Change Count</button>
    </div>
  )
}

export default Home