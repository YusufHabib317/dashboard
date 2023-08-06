import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme/theme";

import { useSelector } from "react-redux";
import { globalMode } from "./state/modeSlice/modeSlice";
import { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./ui/global/Topbar";
import Sidebar from "./ui/global/Sidebar";

import {
  DashBoard,
  Team,
  Contacts,
  Invoices,
  Form,
  Bar,
  Pie,
  Line,
  Faq,
  Geography,
  Calendar,
} from "./pages";

function App() {
  const mode = useSelector(globalMode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
