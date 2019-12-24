import React from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import { Link } from 'react-router-dom'
function InvoiceDetails(props){
    let invoiceInfo = props.location.state
    console.log(invoiceInfo)
    // general invoice info
    const InvoiceID = invoiceInfo.InvoiceID
    const orderStatus = invoiceInfo.orderStatus
    const orderDate = invoiceInfo.orderDate
    // bill from
    const BillFromName = invoiceInfo.BillFromName
    const BillFromEmail = invoiceInfo.BillFromEmail
    const BillFromStreetName = invoiceInfo.BillFromStreetName
    const BillFromCity = invoiceInfo.BillFromCity
    const BillFromPhone = invoiceInfo.BillFromPhone
    // bill to 
    const BillToName = invoiceInfo.BillToName
    const BillToEmail = invoiceInfo.BillToEmail
    const BillToStreetName = invoiceInfo.BillToStreetName
    const BillToCity = invoiceInfo.BillToCity
    const BillToPhone = invoiceInfo.BillToPhone

    // invoice details
    const invoiceBuildingblocks = invoiceInfo.InvoiceDetails.map(detail => {
        return(
        <div className='flex flex-row justify-between py-3 pl-6 border-b border-gray-500' key={detail.id}>
        <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>{detail.id}</div>
        <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>{detail.name}</div>
        <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>{detail.unitCost}</div>
        <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>{detail.units}</div>
        <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>{detail.price}</div>
    </div>
        )
    })
    let subTotal = 0
    if(invoiceInfo.InvoiceDetails.length > 0){
        invoiceInfo.InvoiceDetails.forEach(element => {
            subTotal += element.price
        })};
    return(
        <div className='w-10/12 bg-gray-300 float-right min-h-screen'>
          <div className='w-10/12 fixed z-50'>
            <DashboardHeader />
          </div>
          <div className='px-8 py-10 flex flex-wrap justify-between overflow-auto  mt-6'>

          {/* Below is the template for the invoice */}
          <div className='px-5 pt-4 mt-10' style={{width: '100%'}}>
            <div className='float-right w-5/12 flex flex-row justify-between'>
                <div className="flex flex-row items-center hover:bg-blue-300 p-1 px-2 rounded-lg cursor-pointer">
                    <img className='w-4 h-4 mr-2' src={require('../../../images/go-back.png')} alt='go back'/>
                    <Link to='/Invoices'><h3 className='text-blue-700 text-sm tracking-wider'>GO TO INVOICES</h3></Link>
                </div>
                <div className="flex flex-row items-center hover:bg-red-300 p-1 px-2 rounded-lg cursor-pointer">
                    <img className='w-4 h-4 mr-2' src={require('../../../images/pencil-edit-button.png')} alt='eddit button'/>
                    <h3 className='text-red-700 text-sm tracking-wider'>EDIT INVOICES</h3>
                </div>
                <div className="flex flex-row items-center bg-blue-600 p-1 px-2 rounded-lg cursor-pointer">
                    <img className='w-4 h-4 mr-2' src={require('../../../images/printing-tool.png')} alt='go back'/>
                    <h3 className='text-white font-semibold text-sm tracking-wider' onClick={window.print}>PRINT INVOICE</h3>
                </div>
            </div>
          </div>
            <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg' style={{width: '100%'}}>
                <div className='flex flex-row justify-between border-b-2 border-dashed py-5'>
                    <div>
                        <p className='py-2 text-gray-600 font-semibold tracking-wider'>Invoice Info</p>
                        <p className='py-2 text-blue-600 font-light tracking-wider'>#{InvoiceID}</p>
                    </div>
                    <div>
                        <p ><span className='py-2 font-semibold tracking-wider text-sm'>Order status:</span> <span className='py-2 tracking-wider text-sm text-gray-600'>{orderStatus}</span></p>
                        <p><span className='py-2 font-semibold tracking-wider text-sm'>Order Date:</span> <span className='py-2 tracking-wider text-sm text-gray-600'>{orderDate}</span></p>
                    </div>
                </div>
                <div className='flex flex-row justify-between py-5'>
                    <div className='flex flex-col justify-around'>
                        <h1 className='font-semibold tracking-wider'>Bill from</h1>
                        <div className='my-5'>
                            <h3 className='text-gray-700 tracking-wider text-sm font-semibold'>{BillFromName}</h3>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>{BillFromEmail}</p>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>{BillFromStreetName}</p>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>{BillFromCity}</p>
                        </div>
                        <p className='text-gray-700 font-thin text-sm tracking-widest'>{BillFromPhone}</p>
                    </div>

                    <div className='flex flex-col justify-around'>
                        <h1 className='font-semibold tracking-widest'>Bill to</h1>
                        <div className='my-5'>
                            <h3 className='text-gray-700 tracking-widest text-sm font-semibold'>{BillToName}</h3>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>{BillToEmail}</p>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>{BillToStreetName}</p>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>{BillToCity}</p>
                        </div>
                        <p className='text-gray-700 font-thin text-sm tracking-widest'>{BillToPhone}</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between py-5 bg-gray-300 pl-6 border-b'>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>#</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Item Name</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Unit Costs</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Unit</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Price</div>
                </div>
                {invoiceBuildingblocks}
                <div>
                    <div className='float-right w-1/5 mt-10'>
                        <div className='flex flex-row justify-between'>
                            <h3 className='text-gray-600 text-sm tracking-wider py-2'>Sub-total:</h3>
                            <h3 className='text-gray-600 text-sm tracking-wider py-2 mr-3'>${subTotal}</h3>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <h3 className='text-gray-600 text-sm tracking-wider py-2'>VAT:</h3>
                            <h3 className='text-gray-600 text-sm tracking-wider py-2 mr-3'>${subTotal * 0.21}</h3>
                        </div>
                        <div className='flex flex-row justify-between mt-5'>
                            <h2 className='text-lg font-semibold tracking-wider py-2'>Grand Total:</h2>
                            <h2 className='text-lg font-semibold tracking-wider py-2'>${subTotal * 1.21}</h2>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        
        </div>
    )
}
export default InvoiceDetails