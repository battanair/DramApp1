import Stack from '@mui/material/Stack';
import Item from './item';

const Categoriaobra = ({categoria1, categoria2, nota}) => {
    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 2
            }}
        >
            <Item>{categoria1}</Item>
            <Item>{categoria2}</Item>
            <Item>{nota}</Item>
        </Stack>
    )
}

export default Categoriaobra;



