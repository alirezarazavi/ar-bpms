import React, { ReactElement, FC } from "react";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";

const Form: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
        }}>
            <Stack
                component="form"
                spacing={2}
                noValidate
                >
                <Typography variant="h3">فرم ثبت تجهیزات</Typography>

                <TextField id="outlined-basic" label="Motherboard" variant="outlined" dir="rtl" />
                <TextField id="outlined-basic" label="CPU" variant="outlined" dir="rtl" />
                <TextField id="outlined-basic" label="RAM" variant="outlined" dir="rtl" />
                <TextField id="outlined-basic" label="HDD" variant="outlined" dir="rtl" />
                <TextField id="outlined-basic" label="SSD" variant="outlined" dir="rtl" />
                <TextField id="outlined-basic" label="Monitor" variant="outlined" dir="rtl" />
                <TextField id="outlined-basic" label="Printer" variant="outlined" dir="rtl" />
                <TextField id="outlined-basic" label="Scanner" variant="outlined" dir="rtl" />
                <TextField id="outlined-basic" label="Case" variant="outlined" dir="rtl" />
                <TextField id="outlined-basic" label="User" variant="outlined" dir="rtl" />

                <Button variant="contained">ذخیره</Button>
            
            </Stack>
        </Box>
    );
};

export default Form;