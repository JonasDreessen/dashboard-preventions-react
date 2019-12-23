import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment} from '../../../redux/actions/counter'
import {decrement} from '../../../redux/actions/counter'

function DashboardHeader() {
  const counter = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()
  return (
  <div className='flex w-full px-10 py-5 flex-row-reverse' style={{backgroundColor: '#3949ab'}}>
      <img className='float-right object-contain h-8 z-50 relative' src={require('../../../images/user.png')} alt='avatar' onClick={() => dispatch(increment())}/>
      <img className='float-right object-contain h-8 mr-4 z-50' src={require('../../../images/magnifying-glass.png')} alt='analysis pictogram'  onClick={() => dispatch(decrement())}/>
  </div>
  );
}
export default DashboardHeader;
