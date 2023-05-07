
import "./funnel.scss";
import { FunnelChart, LabelList, Tooltip } from "recharts";
const Funnel=()=> {
  const data = [
    {
      value: 100,
      name: "展现",
      fill: "#8884d8",
    },
    {
      value: 80,
      name: "点击",
      fill: "#83a6ed",
    },
    {
      value: 50,
      name: "访问",
      fill: "#8dd1e1",
    },
    {
      value: 40,
      name: "咨询",
      fill: "#82ca9d",
    },
    {
      value: 26,
      name: "订单",
      fill: "#a4de6c",
    },
  ];

  return (
    <div className="funnel-main">
      <div className="funnel-wrapper">
        <div className="funnel-chart">
         
            <FunnelChart >
              <Tooltip />
              <Funnel
               className="funnel"
                dataKey="value"
                data={data}
                isAnimationActive
                fill="#8884d8"
              >
                <LabelList
                  position="right"
                  fill="#a4de6c"
                  stroke="none"
                  dataKey="name"
                />
              </Funnel>
            </FunnelChart>
         
        </div>
      </div>
    </div>
  );
}

export default Funnel;
