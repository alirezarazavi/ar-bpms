import React, { ReactElement, FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createType, getAllTypes } from "../../../services/type.service";
import TypeInterface from "../../../interfaces/type.interface";
import TheBreadcrumbs from "../../../components/TheBreadcrumbs";

const EquipmentTypesCreate: FC<any> = (): ReactElement => {
    const [ types, setTypes ] = useState<TypeInterface[]>([]);
    const [ name, setName ] = useState<string>("");
    const [ faName, setFaName ] = useState<string>("");

    const [ showSnackbar, setShowSnackbar ] = useState<boolean>(false);
    const [ snackbarMessage, setSnackbarMessage ] = useState<string>("");

    useEffect(() => {
        getAllTypes()
            .then(response => response.json())
            .then((data) => {
                setTypes(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    async function handleSubmit(e: any) {
        e.preventDefault();

        createType(name, faName)
            .then((response) => {
                setSnackbarMessage("ثبت شد");
                setShowSnackbar(true);
                clearForm();
            })
            .catch((error) => {
                setSnackbarMessage("مشکلی پیش آمد. دوباره تلاش کنید");
                setShowSnackbar(true);
            })
    }

    function clearForm() {
        setName("");
        setFaName("");
    }

    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
        }}>
            <Snackbar
                open={showSnackbar}
                onClose={() => setShowSnackbar(false)}
                message={snackbarMessage}
            />

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TheBreadcrumbs/>
                </Grid>
                
                <Grid item xs={8}>
                    <Typography variant="h3">لیست انواع تجهیزات</Typography>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">نام</TableCell>
                                    <TableCell align="center">نام فارسی</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {types.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            {row.name}
                                        </TableCell>
                                        <TableCell component="th" scope="row" align="center">
                                            {row.faName}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{ padding: 2 }}>
                        <Stack
                            component="form"
                            spacing={2}
                            noValidate
                            onSubmit={handleSubmit}
                            >
                            <Typography variant="h3">ثبت نوع تجهیزات</Typography>

                            <TextField 
                                id="outlined-basic" 
                                label="نام انگلیسی" 
                                variant="outlined" 
                                dir="rtl" 
                                value={name}
                                onChange={(e: any) => setName(e.target.value)}
                                />
                            
                            <TextField 
                                id="outlined-basic" 
                                label="نام فارسی" 
                                variant="outlined" 
                                dir="rtl" 
                                value={faName}
                                onChange={(e: any) => setFaName(e.target.value)}
                                />

                            <Button type="submit" variant="contained">ذخیره</Button>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EquipmentTypesCreate;