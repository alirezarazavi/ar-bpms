import React, { ReactElement, FC, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { DataGrid, GridColDef, GridValueGetterParams, faIR } from '@mui/x-data-grid';
import { Link as RouterLink } from "react-router-dom";
import { getAllEquipments } from "../../services/equipment.service";
import TheBreadcrumbs from "../../components/TheBreadcrumbs";

const EquipmentsIndex: FC<any> = (): ReactElement => {
    const [ equipments, setEquipments ] = useState<any>([]);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 130 },
        { 
            field: 'type', 
            headerName: 'نوع', 
            width: 150,
            valueGetter: (params: GridValueGetterParams) =>
            `${(params.row.type != null) ? params.row.type.name : ''}`,
        },
        { 
            field: 'brand', 
            headerName: 'برند', 
            width: 150,
            valueGetter: (params: GridValueGetterParams) =>
            `${(params.row.brand != null) ? params.row.brand.name : ''}`,
        },
        { field: 'model', headerName: 'مدل', width: 150 },
        { field: 'propertyNumber', headerName: 'شماره اموال', width: 150 },
        { field: 'supportNumber', headerName: 'شماره پشتیبانی', width: 150 },
        {
            field: 'action', headerName: 'عملیات', width: 100,
            sortable: false,
            renderCell: (params) => {
                return <Button variant="outlined" size="small" color="info">نمایش</Button>;
            },
        }
    ];
      
    useEffect(() => {
        getAllEquipments()
            .then(response => response.json())
            .then((data) => {
                setEquipments(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <Box sx={{
            flexGrow: 1,
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
        }}>
            <TheBreadcrumbs/>

            <Button 
                variant="contained" 
                component={RouterLink} 
                sx={{ marginBottom: 2 }}
                to="/dashboard/equipments/create">
                    ثبت تجهیزات جدید
            </Button>
            <Button 
                variant="outlined" 
                component={RouterLink} 
                sx={{ marginBottom: 2, marginLeft: 1 }}
                to="/dashboard/equipments/types">
                    مدیریت انواع تجهیزات
            </Button>
            <Button 
                variant="outlined" 
                component={RouterLink} 
                sx={{ marginBottom: 2, marginLeft: 1 }}
                to="/dashboard/equipments/brands">
                    مدیریت برندها
            </Button>
            <Button 
                variant="outlined" 
                component={RouterLink} 
                sx={{ marginBottom: 2, marginLeft: 1 }}
                to="/dashboard/equipments/properties">
                    مدیریت ویژگی‌های تجهیزات
            </Button>

            <Typography variant="h3">لیست تجهیزات</Typography>

            <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    rows={equipments}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
                />
            </div>

            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>نوع</TableCell>
                            <TableCell align="center">برند</TableCell>
                            <TableCell align="center">مدل</TableCell>
                            <TableCell align="center">شماره اموال</TableCell>
                            <TableCell align="center">شماره پشتیبانی</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {equipments.map((row: any) => (
                            <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                { (row.type != null) ? row.type.name : "" }
                            </TableCell>
                            <TableCell align="center">
                                { (row.brand != null) ? row.brand.name : "" }
                            </TableCell>
                            <TableCell align="center">{row.model}</TableCell>
                            <TableCell align="center">{row.propertyNumber}</TableCell>
                            <TableCell align="center">{row.supportNumber}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
        </Box>
    );
};

export default EquipmentsIndex;