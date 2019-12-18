import React from 'react'
import {BarChart, Bar, Tooltip} from 'recharts'; 
const data = [
    {name: 'Page A', 'new team members': 2, 'team members left': 3, 'total team member': 99},
    {name: 'Page B', 'new team members': 3, 'team members left': 1, 'total team member': 102},
    {name: 'Page C', 'new team members': 2, 'team members left': 9, 'total team member': 93},
    {name: 'Page D', 'new team members': 4, 'team members left': 0, 'total team member': 104},
    {name: 'Page E', 'new team members': 6, 'team members left': 2, 'total team member': 104},
    {name: 'Page F', 'new team members': 1, 'team members left': 0, 'total team member': 101},
    {name: 'Page G', 'new team members': 2, 'team members left': 1, 'total team member': 101},
  ];
function MembersAdded (){
    return(
    <div className='flex flex-col justify-between' style={{height:400}}>
        <div className='px-5 pt-4 bg-white rounded shadow-lg'>
            <div className='flex flex-row items-center'>
                <h1>New team members</h1>
                <img className='w-5 h-4 ml-2' src={require('../../../images/arrow-up.png')} alt='arrow up'/>
            </div>
            <div className='flex flex-row'>
                <p className='text-gray-500 text-xs mt-1'>jan 01 - jul 31</p>
                <BarChart width={150} height={85} data={data}>
                <Tooltip />
                    <Bar dataKey='new team members' fill="#c2d3cd" />
                </BarChart>
            </div>
        </div>

        <div className='px-5 pt-4 bg-white rounded shadow-lg'>
        <div className='flex flex-row items-center'>
                <h1>Team members left</h1>
                <img className='w-5 h-4 ml-2' src={require('../../../images/arrow-down.png')} alt='arrow down'/>
            </div>
            <div className='flex flex-row'>
                <p className='text-gray-500 text-xs mt-1'>jan 01 - jul 31</p>
                <BarChart width={150} height={85} data={data}>
                <Tooltip />
                    <Bar dataKey='team members left' fill="#fa877f" />
                </BarChart>
            </div>
        </div>

        <div className='px-5 pt-4 bg-white rounded shadow-lg'>
            <div className='flex flex-row items-center'>
                <h1>Total team members</h1>
                <img className='w-5 h-4 ml-2' src={require('../../../images/arrow-up.png')} alt='arrow up'/>
            </div>

            <div className='flex flex-row'>
                <p className='text-gray-500 text-xs mt-1'>jan 01 - jul 31</p>
                <BarChart width={150} height={85} data={data}>
                <Tooltip />
                    <Bar dataKey='total team member' fill="#7180ac" />
                </BarChart>
            </div>
        </div>
    </div>
    )
}

export default MembersAdded

