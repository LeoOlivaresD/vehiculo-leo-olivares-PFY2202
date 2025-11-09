import { useEffect } from "react";
import Cabecera from "../components/Header";
import { useVehiculos } from "../context/VehiculosContext";

function ListarVehiculos() {
  const { vehiculosInventario } = useVehiculos();

  useEffect(() => {
    console.log("Vehículos actualizados:", vehiculosInventario);
  }, [vehiculosInventario]);

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
            {vehiculosInventario.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No hay vehículos registrados
                </td>
              </tr>
            ) : (
              vehiculosInventario.map((v) => (
                <tr key={v.id}>
                  <td>{v.marca}</td>
                  <td>{v.modelo}</td>
                  <td>{v.precio}</td>
                  <td>{v.año}</td>
                  <td>{v.descripcion}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarVehiculos;
