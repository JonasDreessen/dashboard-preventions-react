import React from 'react';
import NavigationBar from './components/navigationbar/navigationbar';
import Insights from './components/dashboard/insights/insights';
function App() {
  return (
  <div className='flex-auto'>
      <NavigationBar />
      <Insights />
  </div>
  );
}

export default App;
