import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {AvatarClose} from '../../../redux/AvatarPopUp/AvatarPopUp'

function AvatarSettings() {
    const popUpState = useSelector(state => state.AvatarPopUpSwitcher)
    const sex = useSelector(state => state.ChangeAvatarSex)
    const dispatch = useDispatch()
    const handleClick = (e) => {
        if(popUpState){
            dispatch(AvatarClose())
        }
    }
    const avatar = sex.male ? 'user.png' : 'girl.png'
    const name = sex.male ? 'Jonas Dreessen' : 'Valerie Demeester'
    const job = sex.male ? 'Marketing Officer' : 'Head HR'
    document.addEventListener("mousedown", handleClick);
    const node = useRef()
  return (
  <div className={popUpState ? 'border rounded bg-white absolute' : 'hidden'} style={{top:62, right:50}} ref={node}>
    <div className='flex flex-row border-b-2 bg-gray-200 items-center py-2'>
        <img className='w-8 h-8 mx-3' src={require(`../../../images/${avatar}`)} alt='avatar'/>
        <div className='mr-3'>
            <h1 className='font-semibold tracking-wider text-lg'>{name}</h1>
            <h3 className='font-light'>{job}</h3>
        </div>
    </div>
    <div>
        <div className='flex flex-row items-center pl-3 mb-2 py-2 hover:bg-gray-300'>
            <img className='w-5 mr-4' src={require('../../../images/avatar-gear-option.png')} alt='settings-logo'/>
            <h1 className='text-gray-600 font-light tracking-wider'>Settings</h1>
        </div>
        <div className='flex flex-row items-center pl-3 mb-2 py-2 hover:bg-gray-300'>
            <img className='w-5 mr-4' src={require('../../../images/avatar-exclamation.png')} alt='feedback'/>
            <h1 className='text-gray-600 font-light tracking-wider'>Feedback</h1>
        </div>
        <div className='flex flex-row items-center pl-3 mb-2 py-2 hover:bg-gray-300'>
            <img className='w-5 mr-4' src={require('../../../images/avatar-conversation.png')} alt='feedback'/>
            <h1 className='text-gray-600 font-light tracking-wider'>Help</h1>
        </div>
        <div className='flex flex-row items-center pl-3 py-2 hover:bg-gray-300'>
            <img className='w-5 mr-4' src={require('../../../images/logout.png')} alt='feedback'/>
            <h1 className='text-gray-600 font-light tracking-wider'>Logout</h1>
        </div>
    </div>
  </div>
  );
}
export default AvatarSettings;