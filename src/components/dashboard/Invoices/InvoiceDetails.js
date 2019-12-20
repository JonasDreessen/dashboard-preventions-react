import React from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
function InvoiceDetails(){
    return(
        <div className='w-10/12 bg-gray-300 float-right min-h-screen'>
          <div className='w-10/12 fixed z-50'>
            <DashboardHeader />
          </div>
          <div className='px-8 py-10 flex flex-wrap justify-between overflow-auto  mt-6'>

          {/* Below is the template for the invoice */}
            <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg' style={{width: '100%'}}>
                <div className='flex flex-row justify-between border-b-2 border-dashed py-5'>
                    <div>
                        <p className='py-2 text-gray-600 font-semibold tracking-wider'>Invoice Info</p>
                        <p className='py-2 text-blue-600 font-light tracking-wider'>#1234</p>
                    </div>
                    <div>
                        <p ><span className='py-2 font-semibold tracking-wider text-sm'>Order status:</span> <span className='py-2 tracking-wider text-sm text-gray-600'>on hold</span></p>
                        <p><span className='py-2 font-semibold tracking-wider text-sm'>Order Date:</span> <span className='py-2 tracking-wider text-sm text-gray-600'>February 17t 2018</span></p>
                    </div>
                </div>
                <div className='flex flex-row justify-between py-5'>
                    <div className='flex flex-col justify-around'>
                        <h1 className='font-semibold tracking-wider'>Bill from</h1>
                        <div className='my-5'>
                            <h3 className='text-gray-700 tracking-wider text-sm font-semibold'>Pointbreak</h3>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>JohnDoe@pointbreak.co</p>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>Theodoor rooswijkplaats 4</p>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>Antwerpen 2000</p>
                        </div>
                        <p className='text-gray-700 font-thin text-sm tracking-widest'>+32 49 37 066 12</p>
                    </div>

                    <div className='flex flex-col justify-around'>
                        <h1 className='font-semibold tracking-widest'>Bill to</h1>
                        <div className='my-5'>
                            <h3 className='text-gray-700 tracking-widest text-sm font-semibold'>Coca Cola Company</h3>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>Coca@Cola.com</p>
                        </div>
                        <div className='my-5'>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>CokeRoad 22</p>
                            <p className='text-gray-700 font-thin text-sm tracking-widest'>Soscity 2212</p>
                        </div>
                        <p className='text-gray-700 font-thin text-sm tracking-widest'>+32 49 37 066 12</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between py-5 bg-gray-300 pl-6 border-b'>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>#</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Item Name</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Unit Costs</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Unit</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider'>Price</div>
                </div>
                <div className='flex flex-row justify-between py-3 pl-6 border-b border-gray-500'>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>1</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>Development</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>60</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>20</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>1200</div>
                </div>
                <div className='flex flex-row justify-between py-3 pl-6 border-b border-gray-500'>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>2</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>Design</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>40</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>25</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>1000</div>
                </div>
                <div className='flex flex-row justify-between py-3 pl-6 border-b border-gray-500'>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>3</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>Deployment</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>50</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>7</div>
                    <div style={{width:'20%'}} className='text-sm tracking-wider text-gray-600'>350</div>
                </div>
                <div>
                    <div className='float-right w-1/5 mt-10'>
                        <div className='flex flex-row justify-between'>
                            <h3 className='text-gray-600 text-sm tracking-wider py-2'>Sub-total:</h3>
                            <h3 className='text-gray-600 text-sm tracking-wider py-2 mr-3'>$2550</h3>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <h3 className='text-gray-600 text-sm tracking-wider py-2'>VAT:</h3>
                            <h3 className='text-gray-600 text-sm tracking-wider py-2 mr-3'>$535,5</h3>
                        </div>
                        <div className='flex flex-row justify-between mt-5'>
                            <h2 className='text-lg font-semibold tracking-wider py-2'>Grand Total:</h2>
                            <h2 className='text-lg font-semibold tracking-wider py-2'>$3080,5</h2>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        
        </div>
    )
}
export default InvoiceDetails