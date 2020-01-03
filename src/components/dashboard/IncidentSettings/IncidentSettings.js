import React from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import HeaderBarColor from './HeaderbarColor'
import NavigationBarColor from './NavigationBarColor'
import MaleFemale from './MaleFemale'
function IncidentSettings (){
    return(
        <div className='w-10/12 bg-gray-300 float-right min-h-screen'>
        <div className='w-10/12 fixed z-50'>
            <DashboardHeader />
          </div>
          <div className='px-8 py-10 flex flex-wrap justify-between overflow-auto  mt-6'>
            <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg' style={{width: '100%'}}>
                <div>
                    <h3 className='text-2xl tracking-wider mb-8 font-light'>Incident Settings</h3>
                    <div className='ml-auto mr-auto'>
                        <HeaderBarColor />
                        <NavigationBarColor />
                        <MaleFemale />
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
export default IncidentSettings