import React from 'react';
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import InsightsMonthly from './InsightsMonthly'
import InsightsYearly from './InsightsYearly'
import InsightsPercentage from './InsightsPercentage'
import InsightsVisitors from './InsightsVisitors'
function Insights() {
  return (
  <div>
    <div className='w-10/12 bg-gray-300 float-right'>
      <div className='w-10/12 fixed z-50'>
        <DashboardHeader />
      </div>
      <div className='px-8 py-10 flex flex-wrap justify-between overflow-auto  mt-6'>
        <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg' style={{width: '48%'}}>
            <div>
              <h3 className='text-lg tracking-wider mb-4'>Monthly Incidents analytic</h3>
              <div className='ml-auto mr-auto'>
                <InsightsMonthly />
              </div>
            </div>
        </div>
        <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg' style={{width: '48%'}}>
            <div>
              <h3 className='text-lg tracking-wider mb-4'>Statics</h3>
              <div className='ml-auto mr-auto'>
                <InsightsYearly />
              </div>
            </div>
        </div>
        <div className='mt-10' style={{width: '48%'}}>
          <InsightsPercentage />
        </div>
        <div className='px-5 pt-4 mt-10 bg-white rounded shadow-lg' style={{width: '48%'}}>
            <div>
              <h3 className='text-lg tracking-wider mb-4'>Visitors</h3>
              <div className='ml-auto mr-auto'>
                <InsightsVisitors />
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Insights;
