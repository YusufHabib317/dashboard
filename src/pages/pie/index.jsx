import { Box } from "@mui/material";
import Header from "../../ui/global/Header";
import PieChart from "../../ui/pieChart";

function Pie() {
  return (
    <Box m={"20px"}>
      <Header title="Pie CHART" subTitle="Simple Pie Chart" />
      <Box height={"75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
}

export default Pie;
