import { Box } from "@mui/material";
import Header from "../../ui/global/Header";
import Geo from "../../ui/geo";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme/theme";

function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title="Pie CHART" subTitle="Simple Pie Chart" />
      <Box
        height={"75vh"}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius={"4px"}
      >
        <Geo />
      </Box>
    </Box>
  );
}

export default Geography;
