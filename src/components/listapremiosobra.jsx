import { Stack, Typography } from "@mui/material";
import { Premiosobra } from "./premiosobra";

const Listapremiosobra = () => {
  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
        PREMIOS
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }} // Columnas en pantallas pequeñas, filas en grandes
        spacing={2}
        sx={{
          justifyContent: { xs: "center", sm: "space-around" }, // Centrado en pequeñas
          alignItems: "center", // Alineación vertical uniforme
          width: "100%", // Asegura que ocupe todo el ancho disponible
          paddingX: 2, // Margen horizontal en pantallas pequeñas
        }}
      >
        <Premiosobra />
        <Premiosobra />
        <Premiosobra />
      </Stack>
    </Stack>
  );
};

export default Listapremiosobra;
