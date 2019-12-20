import React from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import { Link } from 'react-router-dom'
function Invoices(){
    return(
        <div className='w-10/12 bg-gray-300 float-right min-h-screen'>
          <div className='w-10/12 fixed z-50'>
            <DashboardHeader />
          </div>
          <div className='px-8 py-10 flex flex-wrap justify-between overflow-auto mt-6'>
            <div className='px-5 pt-4 mt-10 bg-white rounded shadow-xl' style={{width: '100%'}}>
              <div className='pb-2 border-b'>
                <p className='text-2xl font-light tracking-wider'>Invoices</p>
              </div>
              <div className='mx-2 w-full'>
                <ul className='flex flex-row border-b py-2'>
                  <li style={{width:'14.28%'}} className='text-sm'>
                    <input type='checkbox' value='all'></input>
                  </li>
                  <li style={{width:'14.28%'}} className='text-sm tracking-wider'>Number</li>
                  <li style={{width:'14.28%'}} className='text-sm tracking-wider'>Bill From</li>
                  <li style={{width:'14.28%'}} className='text-sm tracking-wider'>Bill To</li>
                  <li style={{width:'14.28%'}} className='text-sm tracking-wider'>Total Cost</li>
                  <li style={{width:'14.28%'}} className='text-sm tracking-wider'>Status</li>
                </ul>
              </div>

              <div className='mx-2 w-full'>
                <ul className='flex flex-row border-b py-2 align-center'>
                  <li style={{width:'14.28%'}} className='text-sm'>
                    <input type='checkbox' value='all'></input>
                  </li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>#12664</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Pointbreak</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Coca Cola Company</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>3080,5</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Pending</li>
                  <li style={{width:'14.28%'}} className='text-sm text-blue-800 font-semibold flex flex-row justify-around align-center tracking-wider'>
                    <Link to='/InvoiceDetails'><p>VIEW</p></Link>
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
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>#12664</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Pointbreak</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Coca Cola Company</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>3080,5</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Pending</li>
                  <li style={{width:'14.28%'}} className='text-sm text-blue-800 font-semibold flex flex-row justify-around align-center tracking-wider'>
                    <Link to='/InvoiceDetails'><p>VIEW</p></Link>
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
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>#12664</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Pointbreak</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Coca Cola Company</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>3080,5</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Pending</li>
                  <li style={{width:'14.28%'}} className='text-sm text-blue-800 font-semibold flex flex-row justify-around align-center tracking-wider'>
                    <Link to='/InvoiceDetails'><p>VIEW</p></Link>
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
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>#12664</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Pointbreak</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Coca Cola Company</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>3080,5</li>
                  <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>Pending</li>
                  <li style={{width:'14.28%'}} className='text-sm text-blue-800 font-semibold flex flex-row justify-around align-center tracking-wider'>
                    <Link to='/InvoiceDetails'><p>VIEW</p></Link>
                    <div> 
                      <img className='h-5 cursor-pointer' src={require('../../../images/delete.png')} alt='trash' />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <img className='w-12 ml-auto mr-16 hover:shadow-2xl rounded-full' style={{marginTop: -10}}  src={require('../../../images/invoice-plus.png')} alt='add invoice'/>
          </div>
        </div>
    )
}
export default Invoices