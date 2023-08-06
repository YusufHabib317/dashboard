import Header from "../../ui/global/Header";
import { Box } from "@mui/material";
import BarData from "../../ui/barData";

function Bar() {
  return (
    <Box m={"20px"}>
      <Header title="BAR CHART" subTitle="Simple Bar Chart" />
      <Box height={"75vh"}>
        <BarData />
      </Box>
    </Box>
  );
}

export default Bar;
