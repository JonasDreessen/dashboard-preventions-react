import React from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
function Invoices(){
    return(
        <div className='w-10/12 bg-gray-300 float-right min-h-screen'>
          <div className='w-10/12 fixed z-50'>
            <DashboardHeader />
          </div>

          <div className='px-8 py-10 flex flex-wrap justify-between overflow-auto  mt-6'>
            <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg' style={{width: '100%'}}>
              <div className='pb-2 border-b'>
                <p className='text-2xl font-light tracking-wider'>Invoices</p>
              </div>
              <div className='mx-2 w-full'>
                <ul className='flex flex-row border-b py-2'>
                  <li style={{width:'14.28%'}} className='text-sm'>
                    <input type='checkbox' value='all'></input>
                  </li>
                  <li style={{width:'14.28%'}} className='text-sm'>Number</li>
                  <li style={{width:'14.28%'}} className='text-sm'>Bill From</li>
                  <li style={{width:'14.28%'}} className='text-sm'>Bill To</li>
                  <li style={{width:'14.28%'}} className='text-sm'>Total Cost</li>
                  <li style={{width:'14.28%'}} className='text-sm'>Status</li>
                </ul>
              </div>

              <div className='mx-2 w-full'>
                <ul className='flex flex-row border-b py-2 align-center'>
                  <li style={{width:'14.28%'}} className='text-sm'>
                    <input type='checkbox' value='all'></input>
                  </li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>#12664</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Pointbreak</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Coca Cola Company</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>35,000</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Pending</li>
                  <li style={{width:'14.28%'}} className='text-sm text-blue-800 font-semibold flex flex-row justify-around align-center'>
                    <p className='hover:shadow-xl'>VIEW</p>
                    <div> 
                      <img className='h-5 cursor-pointer' src={require('../../../images/delete.png')} alt='trash' />
                    </div>
                  </li>
                </ul>
              </div>

              <div className='mx-2 w-full'>
                <ul className='flex flex-row border-b py-2 align-center'>
                  <li style={{width:'14.28%'}} className='text-sm'>
                    <input type='checkbox' value='all'></input>
                  </li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>#12664</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Pointbreak</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Coca Cola Company</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>35,000</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Pending</li>
                  <li style={{width:'14.28%'}} className='text-sm text-blue-800 font-semibold flex flex-row justify-around align-center'>
                    <p className='hover:shadow-xl'>VIEW</p>
                    <div> 
                      <img className='h-5 cursor-pointer' src={require('../../../images/delete.png')} alt='trash' />
                    </div>
                  </li>
                </ul>
              </div>

              <div className='mx-2 w-full'>
                <ul className='flex flex-row border-b py-2 align-center'>
                  <li style={{width:'14.28%'}} className='text-sm'>
                    <input type='checkbox' value='all'></input>
                  </li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>#12664</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Pointbreak</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Coca Cola Company</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>35,000</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Pending</li>
                  <li style={{width:'14.28%'}} className='text-sm text-blue-800 font-semibold flex flex-row justify-around align-center'>
                    <p className='hover:shadow-xl'>VIEW</p>
                    <div> 
                      <img className='h-5 cursor-pointer' src={require('../../../images/delete.png')} alt='trash' />
                    </div>
                  </li>
                </ul>
              </div>

              <div className='mx-2 w-full'>
                <ul className='flex flex-row border-b py-2 align-center'>
                  <li style={{width:'14.28%'}} className='text-sm'>
                    <input type='checkbox' value='all'></input>
                  </li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>#12664</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Pointbreak</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Coca Cola Company</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>35,000</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500'>Pending</li>
                  <li style={{width:'14.28%'}} className='text-sm text-blue-800 font-semibold flex flex-row justify-around align-center'>
                    <p className='hover:shadow-xl'>VIEW</p>
                    <div> 
                      <img className='h-5 cursor-pointer' src={require('../../../images/delete.png')} alt='trash' />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Invoices