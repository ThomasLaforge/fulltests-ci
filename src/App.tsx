import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Calculatrice from "./Calculatrice";
import HeureJupyterienne from "./HeureJupyterienne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeureJupyterienne />
  },
  {
    path: "/calculatrice",
    element: <Calculatrice />
  },
  {
    path: "/heure-jupyterienne",
    element: <HeureJupyterienne />
  }
]);

export default function App(){
  return (
   <RouterProvider router={router} />   
  )
}