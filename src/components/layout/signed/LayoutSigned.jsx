import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { useTheme } from "../../../common/hooks";

const LayoutSigned = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default LayoutSigned;
