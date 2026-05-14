import Header from './Header'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div className='bg-yellow-400 from-yellow-200'>
        <Header />
        <div className='min-h-screen mx-0 sm:mx-5 md:mx-10 lg:mx-20 p-20'>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout
