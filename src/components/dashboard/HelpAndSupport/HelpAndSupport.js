import React from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
function HelpAndSupport(){
    return(
        <div className='w-10/12 bg-gray-300 float-right min-h-screen'>
          <div className='w-10/12 fixed z-50'>
              <DashboardHeader />
          </div>
            <div className='px-8 py-10 flex flex-wrap justify-between overflow-auto  mt-6'>
              <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg' style={{width: '100%'}}>
                  <div>
                    <h3 className='text-lg tracking-wider mb-4'>Incident Settings</h3>
                    <div className='ml-auto mr-auto'>
                        more incident settings
                    </div>
                  </div>
              </div>
          </div>
        </div>
    )
}
export default HelpAndSupport