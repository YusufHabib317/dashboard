import { Box } from "@mui/material";
import Header from "../../ui/global/Header";
import LineChart from "../../ui/lineChart";

function Line() {
  return (
    <Box m={"20px"}>
      <Header title="Pie CHART" subTitle="Simple Pie Chart" />
      <Box height={"75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
}

export default Line;
