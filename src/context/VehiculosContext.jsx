import { createContext, useState, useContext, useEffect } from "react";

const VehiculosContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useVehiculos = () => {
  const context = useContext(VehiculosContext);
  if (!context) {
    throw new Error("useVehiculos debe usarse dentro de VehiculosProvider");
  }
  return context;
};

export const VehiculosProvider = ({ children }) => {
  // Cargar datos desde localStorage al iniciar
  const [vehiculosInventario, setVehiculosInventario] = useState(() => {
    const saved = localStorage.getItem("vehiculosInventario");
    return saved ? JSON.parse(saved) : [];
  });

  const [vehiculosPosibleCompra, setVehiculosPosibleCompra] = useState(() => {
    const saved = localStorage.getItem("vehiculosPosibleCompra");
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar en localStorage cada vez que cambien los datos
  useEffect(() => {
    localStorage.setItem(
      "vehiculosInventario",
      JSON.stringify(vehiculosInventario)
    );
  }, [vehiculosInventario]);

  useEffect(() => {
    localStorage.setItem(
      "vehiculosPosibleCompra",
      JSON.stringify(vehiculosPosibleCompra)
    );
  }, [vehiculosPosibleCompra]);

  const agregarVehiculo = (vehiculo) => {
    const nuevoVehiculo = { ...vehiculo, id: Date.now() };
    setVehiculosInventario([...vehiculosInventario, nuevoVehiculo]);
  };

  const marcarComoPosibleCompra = (id) => {
    const vehiculo = vehiculosInventario.find((v) => v.id === id);
    if (vehiculo) {
      setVehiculosPosibleCompra([...vehiculosPosibleCompra, vehiculo]);
      setVehiculosInventario(vehiculosInventario.filter((v) => v.id !== id));
    }
  };

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
