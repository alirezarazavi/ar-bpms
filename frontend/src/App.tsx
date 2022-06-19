import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import { CacheProvider } from "@emotion/react";
import { prefixer } from 'stylis';
import Layout from "./components/Layout";
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import "./plugins/i18n";
import './assets/css/app.css';

function App() {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  // define theme
  const theme = createTheme({
    direction: 'rtl',
    typography: {
      fontFamily: 'shabnam',
    },
    palette: {
      primary: {
        main: '#0c103d',
        // light: "#63b8ff",
        // dark: "#005db0",
        contrastText: "#eee",
      },
      secondary: {
        main: '#093170',
        // light: "#82e9de",
        // dark: "#00867d",
        contrastText: "#eee",
      },
    },
  });

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME}`;
  }, []);

  return (
    <CacheProvider value={cacheRtl as any}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;