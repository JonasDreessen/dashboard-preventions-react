import React from 'react'
import {
    ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, Cell,
    Legend, ResponsiveContainer
  } from 'recharts';

function InsightsYearly (){ 
    const data = [
        {name: 'Hazard', amount: 2, pv:2400, amt:2400, label: 'Hazard'}, 
        {name: 'Near Miss', amount: 3, pv:2400, amt:2400}, 
        {name: 'Maintenance', amount: 2.8 , pv:2400, amt:2400},  
        {name: 'Injury', amount: 5, pv:2400, amt:2400},
        {name: 'Property Damage', amount: 5, pv:2400, amt:2400},
        {name: 'Theft', amount: 4.3, pv:2400, amt:2400},
      ];
      const colors = [
        '#BD574E', '#FA877F', '#FFAD87', '#DEDEF0', '#7180AC', '#C2D3CD' 
      ]
const renderBarChart = 
    (
    <ResponsiveContainer width={'100%'} height={300}>
        <ComposedChart data={data} layout='horizontal'>
        <XAxis dataKey=' ' />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" barSize={35} fill="#413ea0" >
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