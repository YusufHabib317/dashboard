import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/Notifications";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import { setMode } from "../../state/modeSlice/modeSlice";
import { useDispatch, useSelector } from "react-redux";
import { tokens } from "../../theme/theme";
import { Search } from "@mui/icons-material";

function Topbar({ isSidebarOpen, setIsSidebarOpen }) {
  const globalMode = useSelector((state) => state.globalMode.mode);
  const theme = useTheme();
  const colors = tokens(theme.palette.globalMode);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setMode());
  };

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      <Box
        display={"flex"}
        backgroundColor={colors.primary[400]}
        borderRadius={"3px"}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: colors.blueAccent[400] }}
          placeholder="Search..."
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search sx={{ color: colors.grey[600] }} />
        </IconButton>
      </Box>

      <Box display={"flex"}>
        <IconButton onClick={handleToggle}>
          {globalMode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
