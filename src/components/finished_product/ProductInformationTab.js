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
    destiny: '',
    imported_by: '',
    destiny_box: '',
    date: '',
    time_box: '',
    box_number: '',
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
                    <TextField value={data.destiny} name={"destiny"} onChange={updateData}></TextField>
                </Stack>
            </Box>
            <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1}} elevation={3}>
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
                        <TextField value={data.destiny_box}  name={"destiny_box"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Número de Cajas Inspeccionadas</Typography>
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
        </Box>
    )
}
export default ProductInformationTab;