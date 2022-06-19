import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1.2rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Typography color="secondary.contrastText" variant="subtitle1">
            {`${new Date().getFullYear()} | شهرداری منطقه ۱۷`}
          </Typography>
          {/* <Grid item xs={12}>
            <Typography color="white" variant="h5">
              اتوماسیون اداری
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="secondary.contrastText" variant="subtitle1">
              {`${new Date().getFullYear()} | شهرداری منطقه ۱۷`}
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;