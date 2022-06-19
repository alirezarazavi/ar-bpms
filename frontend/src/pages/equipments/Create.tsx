import React, { ReactElement, FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import Snackbar from "@mui/material/Snackbar";
import LinearProgress from '@mui/material/LinearProgress';
import BrandInterface from "../../interfaces/brand.interface";
import TypeInterface from "../../interfaces/type.interface";
import TheBreadcrumbs from "../../components/TheBreadcrumbs";
import { createEquipment } from "../../services/equipment.service";
import { getAllTypes } from "../../services/type.service";
import { getAllBrands } from "../../services/brand.service";
import { getAllEquipmentTypesProperties } from "../../services/property.service";
import PropertyInterface from "../../interfaces/property.interface";
import PropertyValueInterface from "../../interfaces/propertyValue.interface";

const EquipmentsCreate: FC<any> = (): ReactElement => {
    const [ equipmentTypes, setEquipmentTypes ] = useState<TypeInterface[]>([]);
    const [ equipmentBrands, setEquipmentBrands ] = useState<BrandInterface[]>([]);
    const [ equipmentTypeProperties, setEquipmentTypeProperties ] = useState<PropertyInterface[]>([]);

    const [ equipmentTypePropertiesValues, setEquipmentTypePropertiesValues] = useState<PropertyValueInterface[]>([]);

    const [ type, setType ] = useState<TypeInterface>();
    const [ brand, setBrand ] = useState<BrandInterface>();
    const [ model, setModel ] = useState<string>("");
    const [ propertyNumber, setPropertyNumber ] = useState<string>("");
    const [ supportNumber, setSupportNumber ] = useState<string>("");
    const [ description, setDescription ] = useState<string>("");

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ showSnackbar, setShowSnackbar ] = useState<boolean>(false);
    const [ snackbarMessage, setSnackbarMessage ] = useState<string>("");

    useEffect(() => {
        getAllTypes()
            .then(response => response.json())
            .then((data) => {
                setEquipmentTypes(data);
            })
            .catch((error) => {
                console.log(error);
            });

        getAllBrands()
            .then(response => response.json())
            .then((data) => {
                setEquipmentBrands(data);
            })
            .catch((error) => {
                console.log(error);
            });

        setIsLoading(false);
    }, []);

    async function handleSubmit(e: any) {
        e.preventDefault();

        createEquipment(type, brand, model, propertyNumber, supportNumber, equipmentTypePropertiesValues)
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

    function equipmentTypeChangeListener(type: any) {
        setType(type);

        getAllEquipmentTypesProperties(type.id)
            .then(response => response.json())
            .then((data) => {
                setEquipmentTypeProperties(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function equipmentTypePropertiesValuesChangeListener(property: any, value: any) {
        console.log(property);
        console.log(value);
        
        setEquipmentTypePropertiesValues([value]);
    }

    function clearForm() {
        setType(undefined);
        setBrand(undefined);
        setModel("");
        setPropertyNumber("");
        setSupportNumber("");
        setDescription("");
    }

    return (
        <Box sx={{
            flexGrow: 1,
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
        }}>
            <TheBreadcrumbs/>

            <Snackbar
                open={showSnackbar}
                onClose={() => setShowSnackbar(false)}
                message={snackbarMessage}
            />

            <Grid container spacing={2} sx={{ flexGrow: 1, marginTop: 1 }} justifyContent="center">
                <Grid item xs={8}>
                    <Card variant="outlined">
                        {isLoading && <LinearProgress />}

                        <Stack
                            component="form"
                            spacing={2}
                            noValidate
                            sx={{ padding: 2 }}
                            onSubmit={handleSubmit}
                            >
                                <Typography variant="h3">فرم ثبت تجهیزات</Typography>

                                <Autocomplete
                                    disablePortal
                                    id="equipments-list"
                                    options={equipmentTypes}
                                    value={type}
                                    onChange={(event: any, value: any) => equipmentTypeChangeListener(value)}
                                    renderInput={(params) => <TextField {...params} label="نوع تجهیزات" />}
                                    getOptionLabel={(option) => option.name}
                                    loading={isLoading}
                                    loadingText="در حال بارگذاری..."
                                    />

                                <Autocomplete
                                    disablePortal
                                    id="equipments-brands"
                                    options={equipmentBrands}
                                    value={brand}
                                    onChange={(event: any, value: any) => setBrand(value)}
                                    renderInput={(params) => <TextField {...params} label="برند تجهیزات" />}
                                    getOptionLabel={(option) => option.name}
                                    loading={isLoading}
                                    loadingText="در حال بارگذاری..."
                                    />

                                <TextField 
                                    id="outlined-basic" 
                                    label="مدل" 
                                    variant="outlined" 
                                    dir="rtl" 
                                    value={model}
                                    onChange={(e: any) => setModel(e.target.value)}
                                    />

                                <TextField 
                                    id="outlined-basic" 
                                    label="شماره اموال" 
                                    variant="outlined" 
                                    dir="rtl" 
                                    value={propertyNumber}
                                    onChange={(e: any) => setPropertyNumber(e.target.value)}
                                    />

                                <TextField 
                                    id="outlined-basic" 
                                    label="شماره پشتیبانی" 
                                    variant="outlined" 
                                    dir="rtl" 
                                    value={supportNumber}
                                    onChange={(e: any) => setSupportNumber(e.target.value)}
                                    />
                                
                                <Divider />

                                {equipmentTypeProperties.map((row: any) => 
                                    <TextField 
                                        id="outlined-basic" 
                                        label={row.faName} 
                                        variant="outlined" 
                                        dir="rtl"
                                        value={equipmentTypePropertiesValues[row.id]}
                                        onChange={(e: any) => equipmentTypePropertiesValuesChangeListener(row.id, e.target.value)}
                                        />
                                )}
                                
                                <TextField 
                                    id="outlined-basic" 
                                    label="توضیحات" 
                                    variant="outlined" 
                                    dir="rtl" 
                                    multiline
                                    rows={4}
                                    value={description}
                                    onChange={(e: any) => setDescription(e.target.value)}
                                    />

                                <Button type="submit" variant="contained">ذخیره</Button>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EquipmentsCreate;