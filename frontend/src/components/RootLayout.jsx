import Header from './Header'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div className='bg-slate-400'>
        <Header />
        <div className='min-h-screen mx-0 sm:mx-5 md:mx-10 lg:mx-20 p-20 bg-slate-400'>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout
