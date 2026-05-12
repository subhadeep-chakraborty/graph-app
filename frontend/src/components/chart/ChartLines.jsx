import React from "react";
import { Line } from "recharts";
import { LINE_CONFIG } from "../../constants/chartConfig";

const ChartLines = () => {
  return (
    <>
      {LINE_CONFIG.map((line) => (
        <Line
          key={line.key}
          dataKey={line.key}
          stroke={line.color}
          name={line.name}
          strokeWidth={2}
          dot={false}
        />
      ))}
    </>
  );
};

export default ChartLines;