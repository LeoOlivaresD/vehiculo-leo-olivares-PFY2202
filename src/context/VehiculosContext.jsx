import { createContext, useState, useContext } from "react";

// Crear el contexto
const VehiculosContext = createContext();

// Hook personalizado para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useVehiculos = () => {
  const context = useContext(VehiculosContext);
  if (!context) {
    throw new Error("useVehiculos debe usarse dentro de VehiculosProvider");
  }
  return context;
};

// Proveedor del contexto
export const VehiculosProvider = ({ children }) => {
  const [vehiculosInventario, setVehiculosInventario] = useState([]);
  const [vehiculosPosibleCompra, setVehiculosPosibleCompra] = useState([]);

  // Agregar vehículo al inventario
  const agregarVehiculo = (vehiculo) => {
    const nuevoVehiculo = { ...vehiculo, id: Date.now() }; // Agregamos un ID único
    setVehiculosInventario([...vehiculosInventario, nuevoVehiculo]);
  };

  // Marcar vehículo como "posible compra"
  const marcarComoPosibleCompra = (id) => {
    const vehiculo = vehiculosInventario.find((v) => v.id === id);
    if (vehiculo) {
      setVehiculosPosibleCompra([...vehiculosPosibleCompra, vehiculo]);
      setVehiculosInventario(vehiculosInventario.filter((v) => v.id !== id));
    }
  };

  // Desmarcar vehículo (devolverlo al inventario)
  const desmarcarVehiculo = (id) => {
    const vehiculo = vehiculosPosibleCompra.find((v) => v.id === id);
    if (vehiculo) {
      setVehiculosInventario([...vehiculosInventario, vehiculo]);
      setVehiculosPosibleCompra(
        vehiculosPosibleCompra.filter((v) => v.id !== id)
      );
    }
  };

  const value = {
    vehiculosInventario,
    vehiculosPosibleCompra,
    agregarVehiculo,
    marcarComoPosibleCompra,
    desmarcarVehiculo,
  };

  return (
    <VehiculosContext.Provider value={value}>
      {children}
    </VehiculosContext.Provider>
  );
};
