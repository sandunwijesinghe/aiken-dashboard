import "./location.scss";

import "react-circular-progressbar/dist/styles.css";
import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts";

const Location = () => {
  const data = [
    {  value: 540 },
    { value: 620 },
    { value: 210 }
  ]
  const COLORS = ['#ed7d31', '#4472c4', '#a5a5a5']
  return (
    <div className="featured">
      <div className="wrapper">
        <div className="featuredChart">
          <ResponsiveContainer className="pie-container" >
            <PieChart className="pie-chart">
              <Pie
              className="pie"
                data={data}
                cx="50%"
                cy="45%"
                labelLine={false}
              
                outerRadius={105}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index]} />
							))}
              </Pie>
              
            
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Location;
