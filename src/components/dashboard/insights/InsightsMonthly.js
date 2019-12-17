import React from 'react'
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

function InsightsMonthly (){ 
const data = [
  {name: 'Hazard', uv: 6, pv:2400, amt:2400, label: 'Hazard'}, 
  {name: 'Near Miss', uv: 9, pv:2400, amt:2400}, 
  {name: 'Maintenance', uv: 8.4 , pv:2400, amt:2400},  
  {name: 'Injury', uv: 15, pv:2400, amt:2400},
  {name: 'Property Damage', uv: 14, pv:2400, amt:2400},
  {name: 'Theft', uv: 12.9, pv:2400, amt:2400},
];
const colors = [
  '#BD574E', '#FA877F', '#FFAD87', '#DEDEF0', '#7180AC', '#C2D3CD' 
]
let renderLabel = function(entry){
  return entry.name
}
const renderPieChart = 
    (
    <ResponsiveContainer width={'90%'} height={300}>
        <PieChart data={data}>
        <Tooltip />
        <Pie data={data} dataKey='uv' cx='50%' innerRadius={80} label={renderLabel}>
            {
            data.map((entry, index) =>(
                <Cell key={`cell-${index}`} fill={colors[index]} />
            ))
            }
        </Pie>
        </PieChart>
    </ResponsiveContainer>
    );

    return(
        renderPieChart
    )
}
export default InsightsMonthly