import Obra from "../pages/obra";
import Home from "../pages/home";
import Persona from "../pages/persona"


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
  },
 
];