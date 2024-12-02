import { Stack } from "@mui/material";
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
    paddingBottom: 5
  }}
>
<h5><b>PREMIOS</b></h5>

    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-around",
        alignItems: "flex-start",
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
