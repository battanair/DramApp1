import Obra from "../pages/obra";
import Home from "../pages/home";
import Persona from "../pages/persona"
import Obra2 from "../pages/Obra2";


export const routeConfig = [
  {
    name: "Root",
    path: "/",
    page: <Home />,
  },{
    name: "Obra",
    path: "/obra/",
    page: <Obra />,
  },{
    name: "Persona",
    path: "/persona/",
    page: <Persona />,
  },{
    name: "Obra2",
    path: "/obra2",
    page: <Obra2 />,
  },
 
];