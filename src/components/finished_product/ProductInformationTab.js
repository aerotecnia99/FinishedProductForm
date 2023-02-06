import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const product_fields = {
    time: '',
    pallet: '',
    trace_code: '',
    product_barcode: '',
    pack_code: '',
    corrugated_code: '',
    sanitary_registration: '',
    destination: '',
    imported_by: '',
    destination_box: '',
    date: '',
    time_box: '',
    box_number: '',
    destination_legend: '',
    product_appearance: '',
    informed_person: '',
    paper_tearing: '',
    inspection_status: '',
    status_motif: ''
}

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};


function ProductInformationTab(props){

    product_fields.time = props.time;
    product_fields.date = props.date;
    const [data, setData] = useState(product_fields);

    const updateData = (event) => {
        setData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
        }
        ));
        console.log(data);
    };

    return (
        <Box>
            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: responsive, 
                gap: 3}}>
                <Stack>
                    <Typography variant='body1' align='left'>Hora</Typography>
                    <TextField value={data.time} InputProps={{readOnly: true}}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Pallet</Typography>
                    <TextField value={data.pallet} name={"pallet"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Código de Trazabilidad</Typography>
                    <TextField value={data.trace_code} name={"trace_code"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>C. de Barra del Producto</Typography>
                    <TextField value={data.product_barcode} name={"product_barcode"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>C. de Barra (cajetilla)</Typography>
                    <TextField value={data.pack_code} name={"pack_code"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>C. de Barra (corrugado)</Typography>
                    <TextField value={data.corrugated_code} name={"corrugated_code"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Registro Sanitario</Typography>
                    <TextField value={data.sanitary_registration} name={"sanitary_registration"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Destino</Typography>
                    <TextField value={data.destination} name={"destiny"} onChange={updateData}></TextField>
                </Stack>
            </Box>
            <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3}} elevation={3}>
                <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Impresión en la Caja</Typography>
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: responsive,
                    gap: 3}}>
                    <Stack>
                        <Typography variant='body1' align='left'>Fecha</Typography>
                        <TextField value={data.date} InputProps={{readOnly: true}}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Hora</Typography>
                        <TextField value={data.time_box}> name={"time_box"} onChange={updateData}</TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Importado por</Typography>
                        <TextField value={data.imported_by}  name={"imported_by"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Destino</Typography>
                        <TextField value={data.destination_box}  name={"destiny_box"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Nro. de las Cajas Inspeccionadas</Typography>
                        <TextField value={data.box_number}  name={"box_number"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Fotografía Etiqueta en la Caja</Typography>
                        <Tooltip title='Agregar' arrow>
                            <IconButton>
                                <AddAPhotoIcon/>
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Box>
            </Paper>
            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: responsive, 
                gap: 3}}>
                <Stack>
                    <Typography variant='body1' align='left'>Leyenda del Destino</Typography>
                    <Autocomplete
                        disablePortal
                        options={["OK", "NO OK", "N/A"]}
                        name={"destination_legend"}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Apariencia del Producto</Typography>
                    <Autocomplete
                        disablePortal
                        options={["Buena", "Regular+", "Regular", "Regular-", "Mala"]}
                        name={"product_appearance"}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Persona Informada</Typography>
                    <Autocomplete
                        disablePortal
                        options={["Nombre 1", "Nombre 2", "Nombre 3"]}
                        name={"informed_person"}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Desgarre de Papel</Typography>
                    <Autocomplete
                        disablePortal
                        options={["Bueno", "Malo"]}
                        name={"paper_tearing"}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Estado de Inspección</Typography>
                    <Autocomplete
                        disablePortal
                        options={["Aprobado", "En Proceso", "Detenido"]}
                        name={"inspection_status"}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Motivo del Estado de Inspección</Typography>
                    <TextField value={data.status_motif}  name={"box_number"} onChange={updateData}></TextField>
                </Stack>
            </Box>
        </Box>
    )
}
export default ProductInformationTab;