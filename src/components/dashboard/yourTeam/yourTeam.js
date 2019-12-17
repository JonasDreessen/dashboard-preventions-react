import React from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import TeamMembers from './TeamMembers'
function YourTeam (){ 
    return(
        <div className='w-10/12 bg-gray-300 float-right'>
          <div className='w-10/12 fixed z-50'>
            <DashboardHeader />
          </div>
          <div className='px-8 py-10 flex flex-wrap justify-between overflow-auto  mt-6'>

            <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg m-h-full overflow-hidden' style={{width: '68%', height: 300}}>
                <TeamMembers />
            </div>

            <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg' style={{width: '30%'}}>
                <h1>Team Members</h1>
                <div className='border-b mb-2'>
                    <input placeholder='Search Team Members'></input>
                </div>
            </div>


            
        </div>
        </div>
    )
}
export default YourTeam