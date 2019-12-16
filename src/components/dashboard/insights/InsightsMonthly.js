import React from 'react'
import {PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

function InsightsMonthly (){ 
const data = [
  {name: 'Hazard', uv: 2, pv:2400, amt:2400, label: 'Hazard'}, 
  {name: 'Near Miss', uv: 3, pv:2400, amt:2400}, 
  {name: 'Maintenance', uv: 2.8 , pv:2400, amt:2400},  
  {name: 'Injury', uv: 5, pv:2400, amt:2400},
  {name: 'Property Damage', uv: 5, pv:2400, amt:2400},
  {name: 'Theft', uv: 4.3, pv:2400, amt:2400},
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