import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeToMale, changeToFemale} from '../../../redux/ChangeSex/ChangeSex'
import Switch from 'react-switch'
function MaleFemale (){
    const sex = useSelector(state => state.ChangeAvatarSex.male)
    const dispatch = useDispatch()
    const changeSex = () => {
        if(sex){
            dispatch(changeToFemale())
        }else{
            dispatch(changeToMale())
        }
    }
    return(
        <label className='flex flex-row items-center mb-2' style={{width: '30%'}}>
            <span className='text-lg font-light tracking-wider'>sex</span>
            <Switch 
            checked={sex ? true : false}
            onChange={() => {changeSex()}}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor='#65adff' 
            offColor='#ff7f99'
            className='mx-4 ml-auto'
            />
        </label>
    )
}
export default MaleFemale