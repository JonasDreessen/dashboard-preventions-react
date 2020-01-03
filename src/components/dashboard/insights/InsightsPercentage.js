import React from 'react'
function InsightsPercentage() {
    return(
        <div className='flex flex-row flex-wrap justify-between'>
            <div className='px-5 rounded bg-white shadow-lg py-10 mb-4' style={{width:'48%'}}>
                <h3 className='text-lg tracking-wider mb-4'>Daily incidents</h3>
                <div className='mb-4 flex flex-row justify-between w-9/12'>
                    <img className='w-6' src={require('../../../images/arrow-down.png')} alt='arrow down'/>
                    <h2 className='font-semibold text-xl'>4</h2>
                    <h2 className='text-gray-600 text-sm mt-auto'>44%</h2>
                </div>
                <div className='border w-9/12 rounded bg-gray-200'>
                    <div className='py-1 rounded bg-red-600' style={{width: '44%'}}></div>
                </div>
            </div>
            <div className='px-5 rounded bg-white shadow-lg py-10 mb-4' style={{width:'48%'}}>
                <h3 className='text-lg tracking-wider mb-4'>Weekly incidents</h3>
                <div className='mb-4 flex flex-row justify-between w-9/12'>
                    <img className='w-6' src={require('../../../images/arrow-up.png')} alt='arrow down'/>
                    <h2 className='font-semibold text-xl'>6</h2>
                    <h2 className='text-gray-600 text-sm mt-auto'>65%</h2>
                </div>
                <div className='border w-9/12 rounded bg-gray-200'>
                    <div className='py-1 rounded bg-green-400' style={{width: '65%'}}></div>
                </div>
            </div>
            <div className='px-5 rounded bg-white shadow-lg py-10' style={{width:'48%'}}>
                <h3 className='text-lg tracking-wider mb-4'>Monthly incidents</h3>
                <div className='mb-4 flex flex-row justify-between w-9/12'>
                    <img className='w-6' src={require('../../../images/arrow-up.png')} alt='arrow down'/>
                    <h2 className='font-semibold text-xl'>4</h2>
                    <h2 className='text-gray-600 text-sm mt-auto'>73%</h2>
                </div>
                <div className='border w-9/12 rounded bg-gray-200'>
                    <div className='py-1 rounded bg-green-400' style={{width: '73%'}}></div>
                </div>
            </div>
            <div className='px-5 rounded bg-white shadow-lg py-10' style={{width:'48%'}}>
                <h3 className='text-lg tracking-wider mb-4'>Average severity</h3>
                <div className='mb-4 flex flex-row justify-between w-9/12'>
                    <img className='w-6' src={require('../../../images/arrow-down.png')} alt='arrow down'/>
                    <h2 className='font-semibold text-xl'>Medium</h2>
                    <h2 className='text-gray-600 text-sm mt-auto'>32%</h2>
                </div>
                <div className='border w-9/12 rounded bg-gray-200'>
                    <div className='py-1 rounded bg-orange-400' style={{width: '32%'}}></div>
                </div>
            </div>
        </div>
    )
}
export default InsightsPercentage