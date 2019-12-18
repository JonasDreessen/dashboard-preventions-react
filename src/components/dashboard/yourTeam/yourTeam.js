import React from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import TeamMembers from './TeamMembers'
import MembersAdded from './membersAdded'
import EmployeeData from './employeeData'

function YourTeam (){ 
    return(
        <div className='w-10/12 bg-gray-300 float-right min-h-screen'>
          <div className='w-10/12 fixed z-50'>
            <DashboardHeader />
          </div>
          <div className='px-8 py-10 flex flex-wrap justify-between overflow-auto  mt-6'>

            <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg m-h-full overflow-hidden' style={{width: '68%', height: 400}}>
                <TeamMembers />
            </div>

            <div className='mt-10' style={{width: '30%', height: 400}}>
                <MembersAdded />
            </div>

            <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg m-h-full overflow-hidden' style={{width: '100%', height: 400}}>
                <EmployeeData />
            </div>


            
        </div>
        </div>
    )
}
export default YourTeam