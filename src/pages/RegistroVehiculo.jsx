import { useState } from "react";
import Cabecera from "../components/Header";
import { useVehiculos } from "../context/VehiculosContext";

function RegistrarVehiculo() {
  const { agregarVehiculo } = useVehiculos();

  const [form, setForm] = useState({
    marca: "",
    modelo: "",
    precio: "",
    año: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarVehiculo(form); // Usamos la función del Context
    setForm({ marca: "", modelo: "", precio: "", año: "", descripcion: "" });
  };

  return (
    <div>
      <Cabecera title="Registro de Vehículo" />
      <form onSubmit={handleSubmit} className="container mt-4">
        <input
          name="marca"
          value={form.marca}
          onChange={handleChange}
          placeholder="Marca"
          className="form-control mb-2"
        />
        <input
          name="modelo"
          value={form.modelo}
          onChange={handleChange}
          placeholder="Modelo"
          className="form-control mb-2"
        />
        <input
          name="precio"
          value={form.precio}
          onChange={handleChange}
          placeholder="Precio"
          className="form-control mb-2"
        />
        <input
          name="año"
          value={form.año}
          onChange={handleChange}
          placeholder="Año"
          className="form-control mb-2"
        />
        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default RegistrarVehiculo;
