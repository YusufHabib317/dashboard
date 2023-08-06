import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme/theme";
import Header from "../../ui/global/Header";
import { mockDataInvoices } from "../../data/mockData";

function Invoices() {
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
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => {
        const {
          row: { cost },
        } = params;
        return <Typography color={colors.greenAccent[500]}>{cost}</Typography>;
      },
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m={"20px"}>
      <Header title="Invoices" subTitle="List of Invoice Balances" />
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

          "& .MuiDataGrid-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
}

export default Invoices;
