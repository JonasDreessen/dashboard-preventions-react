import React, {useState}  from 'react'
import teamMemberData from '../../../assets/teamMembers/teamMembers.json'

function TeamMembers (){
    const [textInput, setTextInput] = useState('')
    // mapping over all the teamMebers and putting each of them is separte div's
    console.log(textInput)
    const TeamMember = teamMemberData.data
        .filter(user => {
            return user[1].toLowerCase().indexOf(textInput.toLowerCase()) >= 0 || user[2].toLowerCase().indexOf(textInput.toLowerCase()) >= 0
        })
        .map(user => {
        return(
            <div className='border w-24 h-24 p-2 m-2 text-center' style={{backgroundColor: '#ececec'}} key={user[0]}>
                <img className='w-6 ml-auto mr-auto' src={require('../../../images/user.png')} alt='user'/>
                <div className='flex flex-row items-center justify-center align-center'>
                    <h1 className='tracking-wider font-thin text-xs py-4'>{user[1]} {user[2]}</h1>
                </div>
            </div>
        )
    }
)
    return(
        <div className='m-h-full'>
        <h1>Team Members</h1>
            <div className='border-b mb-2'>
                <input placeholder='Search Team Members' onChange={event => setTextInput(event.target.value)} style={{}}></input>
            </div>
            <div className='flex flex-row flex-wrap overflow-y-auto pt-5 px-2 justify-center' style={{maxHeight:400}}>
                {TeamMember}
            </div>
        </div>
    )
}
export default TeamMembers