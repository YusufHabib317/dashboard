import {
  Box,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import Header from "../../ui/global/Header";
import { ExpandMore } from "@mui/icons-material";

import { tokens } from "../../theme/theme";

function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography color={colors.grey[100]} variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            dolorem nulla minus voluptate, at a omnis cupiditate soluta
            doloribus sed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography color={colors.grey[100]} variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            dolorem nulla minus voluptate, at a omnis cupiditate soluta
            doloribus sed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography color={colors.grey[100]} variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            dolorem nulla minus voluptate, at a omnis cupiditate soluta
            doloribus sed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography color={colors.grey[100]} variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            dolorem nulla minus voluptate, at a omnis cupiditate soluta
            doloribus sed.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Faq;
