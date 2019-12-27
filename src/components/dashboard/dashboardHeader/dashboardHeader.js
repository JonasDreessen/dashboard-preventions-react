import React from 'react';
function DashboardHeader() {
  return (
  <div className='flex w-full px-10 py-5 flex-row-reverse' style={{backgroundColor: '#3949ab'}}>
      <img className='float-right object-contain h-8 z-50 relative' src={require('../../../images/user.png')} alt='avatar' />
      <img className='float-right object-contain h-8 mr-4 z-50' src={require('../../../images/magnifying-glass.png')} alt='analysis pictogram' />
  </div>
  );
}
export default DashboardHeader;
