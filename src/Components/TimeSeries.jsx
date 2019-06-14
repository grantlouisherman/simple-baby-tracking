import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', poop : 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B',  pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', poop: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', poop: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', poop: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F',  pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', poop: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="poop" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="wet" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
