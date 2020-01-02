import React from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import IncidentData from '../../../assets/incidents/incidents.json'
function Incidents(){
  const type =['Hazard', 'Near Miss', 'Maintenance', 'Injury', 'Property Damage', 'Theft']
  const severity =['Extreme', 'High', 'Medium', 'Low', 'Trivial']
  const incidents = IncidentData.map(incident => {
    const randomType = Math.floor(Math.random() * Math.floor(6)) 
    const randomSeverity = Math.floor(Math.random() * Math.floor(5))
    let bgcolor 
    switch(severity[randomSeverity]){
      case 'Extreme':
        bgcolor = 'bg-red-600'
        break
      case 'High':
        bgcolor = 'bg-orange-600'
        break
      case 'Medium':
        bgcolor = 'bg-yellow-600'
        break
      case 'Low':
        bgcolor = 'bg-green-300'
        break
      case 'Trivial':
        bgcolor = 'bg-green-600'
        break
      default:
        bgcolor = 'bg-white'
    }
    return (
    <ul className='flex flex-row list-none min-w-full py-2 border-b border-gray-200' key={incident.id}>
      <li style={{width: '16.666%'}} className='text-sm'>{incident.first_name}</li>
      <li style={{width: '16.666%'}} className='text-sm'>{incident.last_name}</li>
      <li style={{width: '16.666%'}} className='text-sm'>{incident.location}</li>
      <li style={{width: '16.666%'}} className='text-sm'>{incident.date}</li>
      <li style={{width: '16.666%'}} className='text-sm'>{type[randomType]}</li>
      <div className='flex flex-row justify-between'>
        <li style={{width: '16.666%'}} className='text-sm justify-end'>{severity[randomSeverity]}</li>
        <div className={`p-1 rounded-full ml-3 ${bgcolor}`}></div>
      </div>
    </ul>
    )}
  )
    return(
        <div className='w-10/12 bg-gray-300 float-right min-h-screen'>
          <div className='w-10/12 fixed z-50'>
            <DashboardHeader />
          </div>
          <div className='px-8 py-10 flex flex-wrap justify-between mt-6'>
            <div className='px-5 pb-2 mt-10 bg-white rounded shadow-lg overflow-hidden overflow-y-auto h-screen' style={{width: '100%'}}>
                <ul className='flex flex-row list-none border-b-2 mb-4 py-2 bg-white sticky top-0 overflow-y-auto'>
                  <li className='text-gray-700 font-light tracking-wider' style={{width: '16.666%'}}>first name</li>
                  <li className='text-gray-700 font-light tracking-wider' style={{width: '16.666%'}}>last name</li>
                  <li className='text-gray-700 font-light tracking-wider' style={{width: '16.666%'}}>incident location</li>
                  <li className='text-gray-700 font-light tracking-wider' style={{width: '16.666%'}}>date</li>
                  <li className='text-gray-700 font-light tracking-wider' style={{width: '16.666%'}}>type</li>
                  <li className='text-gray-700 font-light tracking-wider' style={{width: '16.666%'}}>severity</li>
                </ul>
                {incidents}
            </div>
        </div>
      </div>
    )
}
export default Incidents