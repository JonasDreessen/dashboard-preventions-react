import React from 'react';
import AvatarSettings from './AvatarSettings'
import {useDispatch, useSelector} from 'react-redux'
import {AvatarOpen} from '../../../redux/AvatarPopUp/AvatarPopUp'
function DashboardHeader() {
    const dispatch = useDispatch()
    const headerbarColor = useSelector(state => state.ChangeHeaderBarColor)
    const sex = useSelector(state => state.ChangeAvatarSex)
    const avatar = sex.male ? 'user.png' : 'girl.png'
    console.log(sex, headerbarColor)
  return (
  <div className='flex w-full px-10 py-5 flex-row-reverse z-10' style={{backgroundColor: headerbarColor.color}}>
      <div onClick={() => dispatch(AvatarOpen())}>
        <img className='float-right object-contain h-8 z-50 relative cursor-pointer' src={require(`../../../images/${avatar}`)} alt='avatar' />
      </div>
      <img className='float-right object-contain h-8 mr-4 z-50' src={require('../../../images/magnifying-glass.png')} alt='analysis pictogram' />
      <AvatarSettings />
  </div>
  );
}
export default DashboardHeader;