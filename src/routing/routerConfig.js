import Obra from "../pages/obra";
import Persona from "../pages/persona"


export const routeConfig = [
  {
    name: "Root",
    path: "/",
    page: <Obra />,
  },{
    name: "Persona",
    path: "/persona",
    page: <Persona />,
  },
 
];