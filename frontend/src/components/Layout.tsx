import React, { FC, ReactNode } from "react";
import { Box, CssBaseline, Grid } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SidebarDrawer from "./SidebarDrawer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />

      <Box sx={{ 
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minHeight: "100vh",
            maxWidth: "100vw",
            flexGrow: 1,
          }}>
            
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }} dir="rtl">
          <Toolbar />

          <Grid container spacing={0}>
            <Grid item xs={2}>
              <SidebarDrawer />
            </Grid>
            <Grid item xs={10}>
              {children}
            </Grid>
          </Grid>
          {/* <Footer /> */}
        </Box>
      </Box>
    </>
  );
  // return (
  //   <>
  //     <CssBaseline />
  //     <Box
  //       sx={{
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "flex-start",
  //         minHeight: "100vh",
  //         maxWidth: "100vw",
  //         flexGrow: 1,
  //       }}
  //     >
  //       <Navbar />
  //       <Grid container spacing={0}>
  //         <Grid item xs={10}>
  //           {children}
  //         </Grid>
  //         <Grid item xs={2} sx={{ backgroundColor: 'whitesmoke' }}>
  //           <Sidebar />
  //         </Grid>
  //       </Grid>
  //       <Footer />
  //     </Box>
  //   </>
  // );
};

export default Layout;