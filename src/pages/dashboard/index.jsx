import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import {
  Download,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Person,
} from "@mui/icons-material";

import { tokens } from "../../theme/theme";
import { mockTransactions } from "../../data/mockData";

import LineChart from "../../ui/lineChart";
import PieChart from "../../ui/pieChart";
import Geo from "../../ui/geo";
import BarData from "../../ui/barData";
import StatsBox from "../../ui/statsBox";
import progressCircle from "../../ui/progressCircle";

import Header from "../../ui/global/Header";
import ProgressCircle from "../../ui/progressCircle";

function DashBoard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box p="20px">
      <Box display="flex" justifyContent="space-between" alignItems={"center"}>
        <Header title={"DASHBOARD"} subTitle={"Welcome to your dashboard"} />

        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <Download sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* Gird */}
      <Box
        display={"grid"}
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/*  Row #1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatsBox
            title="12,361"
            subTitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <Email
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatsBox
            title="4522"
            subTitle="Sales Obtained"
            progress="0.5"
            increase="+17%"
            icon={
              <PointOfSale
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatsBox
            title="1254578"
            subTitle="Traffic Inbound"
            progress="0.25"
            increase="+12%"
            icon={
              <PersonAdd
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatsBox
            title="1254578"
            subTitle="Traffic Inbound"
            progress="0.25"
            increase="+12%"
            icon={
              <Traffic
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/*  Row #2 */}

        <Box
          gridColumn={"span 8"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt={"25px"}
            p="0 30px"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={"600"}
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>

              <Typography
                variant="h3"
                fontWeight={"500"}
                color={colors.greenAccent[500]}
              >
                $59,522,475
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <Download
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height={"250px"} mt={"-20px"}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          overflow={"auto"}
        >
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight={"600"}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => {
            return (
              <Box
                key={i}
                display="flex"
                justifyContent={"space-between"}
                alignItems={"center"}
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>

                <Box color={colors.grey[100]}>{transaction.date}</Box>

                <Box
                  color={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRaduis="4px"
                >
                  {transaction.cost}
                </Box>
              </Box>
            );
          })}
        </Box>

        {/*  Row #3 */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight={"600"}>
            Campaign
          </Typography>

          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />

            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
              fontWeight={"600"}
              sx={{ marginTop: "15px" }}
            >
              $48.32 Revenue Generated
            </Typography>

            <Typography>Includes extra misc expanditures and costs</Typography>
          </Box>
        </Box>

        {/*  */}

        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight={"600"} sx={{ mb: "15px" }}>
            Sales Quantity
          </Typography>

          <Box height={"250px"} mt="-25px">
            <BarData isDashboard={true} />
          </Box>
        </Box>

        {/*  */}

        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight={"600"} sx={{ mb: "15px" }}>
            Geography based traffic
          </Typography>

          <Box height={"200px"}>
            <Geo isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashBoard;
