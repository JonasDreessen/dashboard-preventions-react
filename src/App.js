import React from 'react';
import Navigationbar from './components/navigationbar/navigationbar'
import DashboardInformation from './components/dashboard/dashboardInformation'
import NavigationBar from './components/navigationbar/navigationbar';
function App() {
  return (
  <div className='flex-auto'>
      <NavigationBar />
      <DashboardInformation />
  </div>
  );
}

export default App;
