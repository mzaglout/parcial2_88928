import { Route , Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { ElectronicosRegistrar } from "../../componentes/Electronicos/ElectronicosRegistrar";
import { ElectronicoAdmin } from "../../componentes/Electronicos/ElectronicosAdmin";
import { ElectronicoListar } from "../../componentes/Electronicos/ElectronicosListar";
import { Quienes } from "../../componentes/otros/Quienes Somos";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/Inicio" element={< Inicio/>}  />
            <Route path="/ElectronicoRegistrar"element={<ElectronicosRegistrar/>} />
            <Route path="/Eleadm"element={<ElectronicoAdmin/>} />
            <Route path="/ElectronicoListar"element={<ElectronicoListar/>} />
            <Route path="/Quien" element={<Quienes/>} />
            <Route path="*" element={< NoEncontrado/>} />
        </Routes>
    );
};