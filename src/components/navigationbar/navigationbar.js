import React from 'react';
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {InsightFocus, IncidentFocus, TeamAlertFocus, YourTeamFocus, IncidentSettingsFocus} from '../../redux/navigationFocus/navigationFocus'

function NavigationBar() {
  const focusState = useSelector(state => state.navigationFocusser)
  const navigationBarColor = useSelector(state => state.ChangeNavigationBarColor)
  const dispatch = useDispatch()
  console.log(navigationBarColor)
  return (
  <div className='h-screen w-1/6 float-left shadow-2xl flex flex-col fixed' style={{backgroundColor: navigationBarColor.color}}>
    <div className='h-20 flex justify-center items-center' style={{backgroundColor:'#202020'}}>
      <h1 className='text-white items-center font-hairline tracking-widest text-lg'>POINTBREAK ADMIN</h1>
    </div>
    <div className='h-full flex flex-col'>
      <div className= {focusState === 'Insights' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/analysis-gray.png')} alt='analysis' className='mr-5 w-6'/> 
        <Link to='/'><h5 style={{color:navigationBarColor.textcolor}} className='antialiased hover:text-white' onClick={() => dispatch(InsightFocus())}>Insights</h5></Link>
      </div>
      
      <div className= {focusState === 'Incidents' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/bullhorn.png')} alt='analysis' className='mr-5 w-6'/> 
        <Link to='/Incidents'><h5 className='antialiased' style={{color:navigationBarColor.textcolor}} onClick={() => dispatch(IncidentFocus())}>Incidents</h5></Link>
      </div>

      
      <div className= {focusState === 'Invoices' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/bell.png')} alt='analysis' className='mr-5 w-6'/>
      <Link to='/Invoices'> <h5 className='antialiased' style={{color:navigationBarColor.textcolor}} onClick={() => dispatch(TeamAlertFocus())}>Invoices</h5></Link>
      </div>

      
      <div className= {focusState === 'YourTeam' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/team.png')} alt='analysis' className='mr-5 w-6'/>
        <Link to='/YourTeam'><h5 className='antialiased' style={{color:navigationBarColor.textcolor}} onClick={() => dispatch(YourTeamFocus())}>Your team</h5></Link>
      </div>

      
      <div className= {focusState === 'IncidentSettings' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/customer-support.png')} alt='analysis' className='mr-5 w-6'/>
       <Link to='/incidentsettings'> <h5 className='antialiased' style={{color:navigationBarColor.textcolor}} onClick={() => dispatch(IncidentSettingsFocus())}>Incident settings</h5></Link>
      </div>

      
      {/* <div className= {focusState === 'HelpAndSupport' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/support.png')} alt='analysis' className='mr-5 w-6'/>
       <Link to='/HelpAndSupport'> <h5 className='antialiased' style={{color:navigationBarColor.textcolor}} onClick={() => dispatch(HelpAndSupportFocus())}>Help & support</h5></Link>
      </div>

      
      <div className= {focusState === 'Settings' ? 'flex flex-row p-4 bg-black shadow-2xl' : 'flex flex-row p-4 hover:bg-black hover:shadow-2xl' } >
        <img src={require('../../images/settings1.png')} alt='analysis' className='mr-5 w-6'/>
        <Link to='/settings'><h5 className='antialiased' style={{color:navigationBarColor.textcolor}} onClick={() => dispatch(SettingsFocus())}>Settings</h5></Link>
      </div> */}

      <div className='flex flex-row p-4 hover:bg-black hover:shadow-2xl cursor-pointer'>
        <img src={require('../../images/logout.png')} alt='analysis' className='mr-5 w-6'/>
        <h5 className='antialiased' style={{color:navigationBarColor.textcolor}}>Sign out</h5>
      </div>
    </div>
  </div>
  );
}

export default NavigationBar;
