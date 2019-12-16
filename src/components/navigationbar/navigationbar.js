import React from 'react';
function NavigationBar() {
  return (
  <div className='h-screen w-1/6 float-left shadow-2xl flex flex-col fixed' style={{backgroundColor: '#2b2b2b'}}>
    <div className='h-20 flex justify-center items-center' style={{backgroundColor:'#202020'}}>
      <h1 className='text-white items-center font-hairline tracking-widest text-lg'>PREVENTION ADMIN</h1>
    </div>
    <div className='h-full flex flex-col'>
      <div className= 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' >
        <img src={require('../../images/analysis-gray.png')} alt='analysis' className='mr-5 w-6'/> 
        <h5 style={{color:'#c8c8c8'}} className='antialiased hover:text-white'  >Insights</h5>
      </div>

      <div className='flex flex-row p-4 hover:bg-black hover:shadow-2xl' >
        <img src={require('../../images/bullhorn.png')} alt='analysis' className='mr-5 w-6'/> 
        <h5 className='antialiased' style={{color:'#c8c8c8'}}>Incidents</h5>
      </div>

      <div className='flex flex-row p-4 hover:bg-black hover:shadow-2xl' >
        <img src={require('../../images/bell.png')} alt='analysis' className='mr-5 w-6'/>
        <h5 className='antialiased' style={{color:'#c8c8c8'}}>Team alerts</h5>
      </div>

      <div className='flex flex-row p-4 hover:bg-black hover:shadow-2xl' >
        <img src={require('../../images/team.png')} alt='analysis' className='mr-5 w-6'/>
        <h5 className='antialiased' style={{color:'#c8c8c8'}}>Your team</h5>
      </div>

      <div className='flex flex-row p-4 hover:bg-black hover:shadow-2xl' >
        <img src={require('../../images/customer-support.png')} alt='analysis' className='mr-5 w-6'/>
        <h5 className='antialiased' style={{color:'#c8c8c8'}}>Incident settings</h5>
      </div>

      <div className= 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' >
        <img src={require('../../images/support.png')} alt='analysis' className='mr-5 w-6'/>
        <h5 className='antialiased' style={{color:'#c8c8c8'}}>Help & support</h5>
      </div>

      <div className='flex flex-row p-4 hover:bg-black hover:shadow-2xl' >
        <img src={require('../../images/settings1.png')} alt='analysis' className='mr-5 w-6'/>
        <h5 className='antialiased' style={{color:'#c8c8c8'}}>Settings</h5>
      </div>

      <div className='flex flex-row p-4 hover:bg-black hover:shadow-2xl'>
        <img src={require('../../images/logout.png')} alt='analysis' className='mr-5 w-6'/>
        <h5 className='antialiased' style={{color:'#c8c8c8'}}>Sign out</h5>
      </div>
    </div>
  </div>
  );
}

export default NavigationBar;
