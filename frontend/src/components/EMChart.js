import ChartContainer from "./chart/ChartContainer";
import ChartLines from "./chart/ChartLines";
import ModeIndicator from "./chart/ModeIndicator";

const EMChart = ({ data }) => {
  return (
    <ChartContainer data={data}>
      <ChartLines />
      <ModeIndicator value={43.9} />
    </ChartContainer>
  );
};

export default EMChart;