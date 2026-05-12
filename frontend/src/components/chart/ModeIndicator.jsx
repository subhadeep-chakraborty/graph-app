import { ReferenceLine, ReferenceArea } from "recharts";

const ModeIndicator = ({ value }) => (
  <>
    <ReferenceArea x1={value - 1} x2={value + 1} fill="red" fillOpacity={0.05} />
    <ReferenceLine
      x={value}
      stroke="red"
      strokeDasharray="5 5"
      label={{ value: "Mode 1", position: "top" }}
    />
  </>
);

export default ModeIndicator;