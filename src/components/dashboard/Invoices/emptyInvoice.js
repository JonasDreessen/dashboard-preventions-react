import React, { useState } from 'react';
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import { Link } from 'react-router-dom'

function EmptyInvoice() {
    // setting local state 
    const [uniqueID, setuniqueID] = useState(1)
    const [invoiceRows, setInvoiceRows] = useState([0])
    const [invoiceDetails, setInvoiceDetails] = useState([])
    
    // function to ensure that every row is a unique number
    function customNumberGenerator(){
        setuniqueID(uniqueID + 1)
        setInvoiceRows([...invoiceRows,uniqueID])
    }
    let subTotal = 0
        invoiceDetails.forEach(element => {
            subTotal += element.price
        });
    
    // create new invoice section for every new id created
    const allInvoiceRows = invoiceRows.map(row => {
        if(row === 0){
            return null
        }else{
        const slicingArray = invoiceDetails.slice()
        let pos = row - 1
        return(
            <div className='flex flex-row justify-between py-3 pl-6 border-b border-gray-500' key={row}>
                <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>{invoiceRows[row]}</div>
                <input 
                onChange={(event) => {slicingArray[pos].name = event.target.value; setInvoiceDetails(slicingArray)}} 
                type='text' 
                style={{width:'20%'}} 
                placeholder='item name' 
                className='text-sm tracking-wider text-gray-600 outline-none pr-5'>
                </input>

                <input 
                onChange={
                    (event) => {slicingArray[pos].unitCost = event.target.value;
                        slicingArray[pos].price = slicingArray[pos].unitCost * slicingArray[pos].units ;
                        setInvoiceDetails(slicingArray);}} 
                type='number' 
                style={{width:'20%'}} 
                placeholder='0' 
                className='text-sm tracking-wider text-gray-600 outline-none pr-5'>
                </input>

                <input 
                onChange={(event) => {slicingArray[pos].units = event.target.value;
                    slicingArray[pos].price = slicingArray[pos].unitCost * slicingArray[pos].units ;
                    setInvoiceDetails(slicingArray);}} 
                type='number' 
                style={{width:'20%'}} 
                placeholder='0' 
                className='text-sm tracking-wider text-gray-600 outline-none pr-5'>
                </input>
                <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>{invoiceDetails[pos].price}</div>
            </div>
            )
        }
    })
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
                        <p className='py-2 text-gray-600 font-semibold tracking-wider'>Create new invoice</p>
                        <p className='py-2 text-blue-600 font-light tracking-wider'>#56131635156</p>
                    </div>
                    <div>
                        <div className='flex flex-row items-center'>
                            <p>
                                <span className='py-2 font-semibold tracking-wider text-sm mr-2'>Order status:</span></p> 
                                <input type='text' placeholder='enter status' className='py-2 tracking-wider text-sm text-gray-600 outline-none'></input>
                        </div>
                        <div className='flex flex-row items-center'>
                        <p>
                            <span className='py-2 font-semibold tracking-wider text-sm mr-2'>Order Date:</span>
                        </p> 
                            <input type='text' placeholder='enter date' className='py-2 tracking-wider text-sm text-gray-600 outline-none'></input>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between py-5'>
                    <div className='flex flex-col justify-around'>
                        <h1 className='font-semibold tracking-wider'>Bill from</h1>
                        <div className='my-5 flex flex-col'>
                            <input type='text' placeholder='company name' className='text-gray-700 tracking-wider text-sm font-semibold outline-none'></input>
                            <input placeholder='email' className='text-gray-700 font-thin text-sm tracking-widest outline-none'></input>
                        </div>
                        <div className='my-5 flex flex-col'>
                            <input placeholder='streetname and number' className='text-gray-700 font-thin text-sm tracking-widest outline-none'></input>
                            <input placeholder='city and zip code' className='text-gray-700 font-thin text-sm tracking-widest outline-none'></input>
                        </div>
                        <input placeholder='phone number' className='text-gray-700 font-thin text-sm tracking-widest outline-none'></input>
                    </div>

                    <div className='flex flex-col justify-around'>
                        <h1 className='font-semibold tracking-widest'>Bill to</h1>
                        <div className='my-5 flex flex-col'>
                            <input type='text' placeholder='company name' className='text-gray-700 tracking-wider text-sm font-semibold outline-none'></input>
                            <input placeholder='email' className='text-gray-700 font-thin text-sm tracking-widest outline-none'></input>
                        </div>
                        <div className='my-5 flex flex-col'>
                            <input placeholder='streetname and number' className='text-gray-700 font-thin text-sm tracking-widest outline-none'></input>
                            <input placeholder='city and zip code' className='text-gray-700 font-thin text-sm tracking-widest outline-none'></input>
                        </div>
                        <input placeholder='phone number' className='text-gray-700 font-thin text-sm tracking-widest outline-none'></input>
                    </div>
                </div>
                <div className='flex flex-row justify-between py-5 bg-gray-300 pl-6 border-b'>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>#</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Item Name</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Unit Costs</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Unit</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Price</div>
                </div>
                {allInvoiceRows}
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
                <div className='float-right' onClick={() => {customNumberGenerator(); setInvoiceDetails([...invoiceDetails, {id:uniqueID, name: '', unitCost: 0, units: 0, price: 0}])}} >
                    add item
                    {invoiceRows.length}
                </div>
            </div>
          </div>
        
        </div>
    )
}
export default EmptyInvoice