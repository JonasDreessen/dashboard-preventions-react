import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeHeaderBarToBlue, changeHeaderBarToRed} from '../../../redux/HeaderBarColor/HeaderBarColor'
import Switch from 'react-switch'

function HeaderBarColor (){
    const HeaderBarColor = useSelector(state => state.ChangeHeaderBarColor.color)
    const dispatch = useDispatch()
    const changeHeaderbarColor = () => {
        if(HeaderBarColor === '#3949ab'){
            dispatch(changeHeaderBarToRed())
        }else{
            dispatch(dispatch(changeHeaderBarToBlue()))
        }
    }
    return(
        <label className='flex flex-row items-center mb-2' style={{width: '30%'}}>
            <span className='text-lg font-light tracking-wider'>headerbar color</span>
            <Switch 
            checked={HeaderBarColor === "#3949ab" ? true : false} 
            onChange={() => {changeHeaderbarColor()}} 
            uncheckedIcon={false} 
            checkedIcon={false} 
            onColor='#3949ab' 
            offColor='#b8201f'
            className='mx-4 ml-auto'
            />
        </label>
    )
}
export default HeaderBarColor