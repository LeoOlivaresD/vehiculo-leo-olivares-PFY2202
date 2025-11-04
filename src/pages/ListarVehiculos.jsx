import { useEffect } from "react";
import Cabecera from "../components/Header";

function ListarVehiculos({ vehiculos = [] }) {
  useEffect(() => { console.log("Vehículos actualizados:", vehiculos);}, [vehiculos]);
  return (
    <div>
      <Cabecera title="Lista de Vehículos" />
      <div className="container mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Precio</th>
              <th>Año</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {vehiculos.map((v, i) => (
              <tr key={i}>
                <td>{v.marca}</td>
                <td>{v.modelo}</td>
                <td>{v.precio}</td>
                <td>{v.año}</td>
                <td>{v.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarVehiculos;
