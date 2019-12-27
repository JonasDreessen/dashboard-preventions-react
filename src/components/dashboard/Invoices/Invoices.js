import React from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
function Invoices(){
  // connecting the global redux state to the EmptyInvoice component
  const invoices = useSelector(state => state.invoiceAdder)
  // mapping over the array of all invoices and displaying all of those. 
  const allInvoices = invoices.map(invoice => {
    return(
      <div className='mx-2 w-full'>
        <ul className='flex flex-row border-b py-3 align-center'>
          <li style={{width:'14.28%'}} className='text-sm'>
            <input type='checkbox' value='all'></input>
          </li>
          <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>{invoice[0].companyDetails[0].invoiceID}</li>
          <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>{invoice[0].companyDetails[0].billFrom.name}</li>
          <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>{invoice[0].companyDetails[0].billTo.name}</li>
          <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>{invoice[0].companyDetails[0].orderDate}</li>
          <li style={{width:'14.28%'}} className='text-sm text-gray-500 tracking-wider'>{invoice[0].companyDetails[0].orderStatus}</li>
          <li style={{width:'14.28%'}} className='text-sm text-blue-800 font-semibold flex flex-row justify-around align-center tracking-wider'>
            <Link to={{
              pathname: '/InvoiceDetails',
              state:{
                InvoiceID: invoice[0].companyDetails[0].invoiceID,
                orderStatus: invoice[0].companyDetails[0].orderStatus,
                orderDate: invoice[0].companyDetails[0].orderDate,
                BillFromName: invoice[0].companyDetails[0].billFrom.name, 
                BillFromEmail:invoice[0].companyDetails[0].billFrom.email, 
                BillFromStreetName: invoice[0].companyDetails[0].billFrom.streetName,
                BillFromCity: invoice[0].companyDetails[0].billFrom.city,
                BillFromPhone: invoice[0].companyDetails[0].billFrom.phone,
                BillToName: invoice[0].companyDetails[0].billTo.name,
                BillToEmail: invoice[0].companyDetails[0].billTo.email,
                BillToStreetName: invoice[0].companyDetails[0].billTo.streetName,
                BillToCity: invoice[0].companyDetails[0].billTo.city,
                BillToPhone: invoice[0].companyDetails[0].billTo.phone,
                InvoiceDetails:invoice[0].invoiceDetails}}}><p>VIEW</p></Link>
            <div> 
              <img className='h-5 cursor-pointer' src={require('../../../images/delete.png')} alt='trash' />
            </div>
          </li>
        </ul>
      </div>
    )
    
  })
    return(
        <div className='w-10/12 bg-gray-300 float-right min-h-screen'>
          <div className='w-10/12 fixed z-50'>
            <DashboardHeader />
          </div>
          <div className='px-8 py-10 flex flex-wrap justify-between overflow-auto mt-6'>
            <div className='px-5 pt-4 mt-10 bg-white rounded shadow-xl' style={{width: '100%'}}>
              <div className='pb-2 mb-6'>
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
                  <li style={{width:'14.28%'}} className='text-sm tracking-wider'>Date</li>
                  <li style={{width:'14.28%'}} className='text-sm tracking-wider'>Status</li>
                </ul>
              </div>
              {allInvoices.length < 1 ? 
              <div className='mx-2 w-full py-10'>
                <p className='text-2xl font-light tracking-wider text-center'>no invoices</p>
              </div> : allInvoices}
            </div>
            
           <Link className='ml-auto' to='/newinvoice'>
              <img 
              className='w-12 mr-16 hover:shadow-2xl rounded-full' 
              style={{marginTop: -10}}  
              src={require('../../../images/invoice-plus.png')} 
              alt='add invoice'/>
           </Link>
          </div>
        </div>
    )
}
export default Invoices