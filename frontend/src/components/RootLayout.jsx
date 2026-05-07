import Header from './Header'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div className='bg-linear-to-t from-blue-200 to-purple-300'>
        <Header />
        <div className='min-h-screen mx-0 sm:mx-5 md:mx-10 lg:mx-20 p-20 bg-linear-to-t from-blue-200 to-purple-300'>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout