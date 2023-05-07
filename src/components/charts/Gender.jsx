import React from "react";
import "./gender.scss";
import {
  Bar,
  BarChart,
  CartesianGrid,
 
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
function Gender() {
  const data = [
    {
      name: "2012",
      uv: 50,
      pv:125,
    },
    {
      name: "2013",
      uv: 25,
      pv: 100,
    },
    {
      name: "2014",
      uv: 75,
      pv: 150,
    },
    {
      name: "2015",
      uv: 110,
      pv: 175,
    },
    {
      name: "2016",
      uv: 125,
      pv: 200,
    },
   
  ];
  return (
    <div>
      <BarChart width={1000} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
       
        <Bar dataKey="pv" fill=" #4472c4" />
        <Bar dataKey="uv" fill="#ed7d31" />
      </BarChart>
    </div>
  );
}

export default Gender;
