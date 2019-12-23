import React from 'react';
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {InsightFocus, IncidentFocus, TeamAlertFocus, YourTeamFocus, IncidentSettingsFocus, HelpAndSupportFocus, SettingsFocus} from '../../redux/navigationFocus/navigationFocus'
 
function NavigationBar() {
  let focusState = useSelector(state => state.navigationFocusser)
  const dispatch = useDispatch()
  console.log(focusState)
  return (
  <div className='h-screen w-1/6 float-left shadow-2xl flex flex-col fixed' style={{backgroundColor: '#2b2b2b'}}>
    <div className='h-20 flex justify-center items-center' style={{backgroundColor:'#202020'}}>
      <h1 className='text-white items-center font-hairline tracking-widest text-lg'>POINTBREAK ADMIN</h1>
    </div>
    <div className='h-full flex flex-col'>
      <div className= {focusState === 'Insights' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/analysis-gray.png')} alt='analysis' className='mr-5 w-6'/> 
        <Link to='/'><h5 style={{color:'#c8c8c8'}} className='antialiased hover:text-white' onClick={() => dispatch(InsightFocus())}>Insights</h5></Link>
      </div>
      
      <div className= {focusState === 'Incidents' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/bullhorn.png')} alt='analysis' className='mr-5 w-6'/> 
        <Link to='/Incidents'><h5 className='antialiased' style={{color:'#c8c8c8'}} onClick={() => dispatch(IncidentFocus())}>Incidents</h5></Link>
      </div>

      
      <div className= {focusState === 'Invoices' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/bell.png')} alt='analysis' className='mr-5 w-6'/>
      <Link to='/Invoices'> <h5 className='antialiased' style={{color:'#c8c8c8'}} onClick={() => dispatch(TeamAlertFocus())}>Invoices</h5></Link>
      </div>

      
      <div className= {focusState === 'YourTeam' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/team.png')} alt='analysis' className='mr-5 w-6'/>
        <Link to='/YourTeam'><h5 className='antialiased' style={{color:'#c8c8c8'}} onClick={() => dispatch(YourTeamFocus())}>Your team</h5></Link>
      </div>

      
      <div className= {focusState === 'IncidentSettings' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/customer-support.png')} alt='analysis' className='mr-5 w-6'/>
       <Link to='/incidentsettings'> <h5 className='antialiased' style={{color:'#c8c8c8'}} onClick={() => dispatch(IncidentSettingsFocus())}>Incident settings</h5></Link>
      </div>

      
      <div className= {focusState === 'HelpAndSupport' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/support.png')} alt='analysis' className='mr-5 w-6'/>
       <Link to='/HelpAndSupport'> <h5 className='antialiased' style={{color:'#c8c8c8'}} onClick={() => dispatch(HelpAndSupportFocus())}>Help & support</h5></Link>
      </div>

      
      <div className= {focusState === 'Settings' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/settings1.png')} alt='analysis' className='mr-5 w-6'/>
        <Link to='/settings'><h5 className='antialiased' style={{color:'#c8c8c8'}} onClick={() => dispatch(SettingsFocus())}>Settings</h5></Link>
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
