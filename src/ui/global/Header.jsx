import { Typography, useTheme, Box } from "@mui/material";
import { tokens } from "../../theme/theme";

function Header(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { title, subTitle } = props;

  return (
    <Box mb={"30px"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
}

export default Header;
