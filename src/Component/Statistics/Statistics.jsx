import React, { useContext } from "react";
import {
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend
} from "recharts";
import { HistoryContext } from "../FriendContext/FriendContext";


const Statistics = () => {
    const {countText, countCall, countVideo}= useContext(HistoryContext);
    console.log(countCall,countText,countVideo)
  const data = [
    { name: "Text", value: countText },
    { name: "Video", value: countVideo },
    { name: "Call", value: countCall },
  ];

  const COLORS = ["#8b5cf6", "#22c55e", "#1f2937"];

  return (
    <div className="bg-gray-100 px-5 md:px-20 py-10">
      <div className="w-full lg:max-w-277 mx-auto">
        <h1 className="text-5xl font-bold mb-4">Friendship Analytics</h1>
        <div className="w-full h-100 shadow-md shadow-gray-400 rounded-2xl mt-6 px-10 py-20">
        <h5 className="text-xl font-semibold text-[#244D3F]">By Interaction Type</h5>
        {
          (countCall===0 && countText===0 && countVideo===0) ? <div className="text-center mt-20 text-3xl font-bold text-gray-500">No Interactions Available Yet!!</div> : 
      
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      }
      </div>
      </div>
    </div>
  );
};

export default Statistics;