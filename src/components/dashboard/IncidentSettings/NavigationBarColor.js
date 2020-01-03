import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeNavigationBarGray, changeNavigationBarLightGray} from '../../../redux/NavigationBarColor/NavigationBarColor'
import Switch from 'react-switch'
function NavigationBarColor (){
    const navigationBarColor = useSelector(state => state.ChangeNavigationBarColor.color)
    const dispatch = useDispatch()
    const checkColor = "#2b2b2b"
    const changeNavigationBarColor = () => {
        if(navigationBarColor === checkColor){
            dispatch(changeNavigationBarLightGray())
        }else{
            dispatch(changeNavigationBarGray())
        }
    }
    return(
        <label className='flex flex-row items-center mb-2' style={{width: '30%'}}>
            <span className='text-lg font-light tracking-wider'>navigationbar color</span>
            <Switch 
            checked={navigationBarColor === checkColor ? true : false}
            onChange={() => {changeNavigationBarColor()}}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor='#2b2b2b' 
            offColor='#c8c8c8'
            className='mx-4 ml-auto'
            />
        </label>
    )
}
export default NavigationBarColor