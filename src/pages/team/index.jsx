import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme/theme";
import Header from "../../ui/global/Header";
import { mockDataTeam } from "../../data/mockData";
// icons
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "nymber",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      headerAlign: "center",

      renderCell: (params) => {
        const {
          row: { access },
        } = params;

        return (
          <Box
            width={"60%"}
            m={"0 auto"}
            p={"5px"}
            display={"flex"}
            justifyContent={"space-between"}
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[800]
            }
            borderRadius={"4px"}
          >
            {access === "admin" ? (
              <AdminPanelSettingsOutlined />
            ) : access === "manager" ? (
              <SecurityOutlined />
            ) : (
              <LockOpenOutlined />
            )}

            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m={"20px"}>
      <Header title="TEAM" subTitle="Managing the Team Member" />
      <Box
        m={"40px 0 0 0"}
        height={"80vh"}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            background: colors.blueAccent[700],
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-virtualScroller": {
            background: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            background: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}

export default Team;
