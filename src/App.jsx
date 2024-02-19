import { Titulo } from "./componentes/Titulo";
import { Librerias } from "./Librerias";

function App(){
  return(
    <div className="p-5 flex flex-col items-center">
      <Titulo />
        <div className="flex gap-3 mt-5">
          <Librerias nombre={"Vite"}imagen={"https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"}></Librerias>
          <Librerias nombre={"React"}imagen={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"}></Librerias>
          <Librerias nombre={"Tailwing"}imagen={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png"}></Librerias>
        </div>
    </div>
  )
}
export default App