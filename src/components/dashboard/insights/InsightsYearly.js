import React from 'react'
import {
    ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer
  } from 'recharts';

function InsightsYearly (){ 
    const data = [
        {name: 'Hazard', amount: 22, pv:2400, amt:2400, label: 'Hazard'}, 
        {name: 'Near Miss', amount: 32, pv:2400, amt:2400}, 
        {name: 'Maintenance', amount: 28 , pv:2400, amt:2400},  
        {name: 'Injury', amount: 52, pv:2400, amt:2400},
        {name: 'Property Damage', amount: 60, pv:2400, amt:2400},
        {name: 'Theft', amount: 43, pv:2400, amt:2400},
      ];
      const colors = [
        '#BD574E', '#FA877F', '#FFAD87', '#DEDEF0', '#7180AC', '#C2D3CD' 
      ]
const renderBarChart = 
    (
    <ResponsiveContainer width={'100%'} height={300}>
        <ComposedChart data={data} margin={{left:20}}>
        <XAxis dataKey='name' padding={{left:13, right:20}}/>
        <YAxis dataKey='amount' width={15}/>
        <Tooltip />
        <Bar dataKey="amount" fill="#413ea0" barSize={25}>
        {
            data.map((entry, index) =>(
                <Cell key={`cell-${index}`} fill={colors[index]} />
            ))
        }
        </Bar>
        <Line type="monotone" dataKey="amount" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
    );

    return(
        renderBarChart
    )
}
export default InsightsYearly