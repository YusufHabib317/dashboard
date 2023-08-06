import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme/theme";
import Header from "../../ui/global/Header";
import { mockDataContacts } from "../../data/mockData";

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "registrarId",
      headerName: "RegistrarID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
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
      flex: 1.5,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 0.5,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 0.5,
    },
  ];

  return (
    <Box m={"20px"}>
      <Header
        title="Contacts"
        subTitle="List Of Contacts for Future Reference"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[700]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
}

export default Contacts;
