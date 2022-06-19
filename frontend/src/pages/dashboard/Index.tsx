import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";
import TheBreadcrumbs from "../../components/TheBreadcrumbs";

const DashboardIndex: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TheBreadcrumbs/>

            <Typography variant="h3">داشبورد</Typography>
        </Box>
    );
};

export default DashboardIndex;