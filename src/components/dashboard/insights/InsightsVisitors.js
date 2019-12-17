import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
function InsightsVisitors() {
    const data = [
        {name: 'January', visitors: 3988, 'new visitors': 1322, amt: 2400},
        {name: 'February', visitors: 3023, 'new visitors': 223, amt: 2210},
        {name: 'March', visitors: 5459, 'new visitors': 487, amt: 2290},
        {name: 'April', visitors: 2780, 'new visitors': 635, amt: 2000},
        {name: 'May', visitors: 1890, 'new visitors': 112, amt: 2181},
        {name: 'June', visitors: 4877, 'new visitors': 698, amt: 2500},
        {name: 'July', visitors: 859, 'new visitors': 102, amt: 2100},
      ];
    return(
        <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="new visitors" fill="#82ca9d" />
        <Bar dataKey="visitors" fill="#8884d8" />
      </BarChart>
    )
}
export default InsightsVisitors

