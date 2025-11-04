import { useState } from "react";
import Cabecera from "../components/Header";

//Se crea un estado local llamado form, que representa los datos del formulario.
function RegistrarVehiculo({ vehiculos, setVehiculos }) {
  const [form, setForm] = useState({
    marca: "",
    modelo: "",
    precio: "",
    año: "",
    descripcion: "",
  });

  //Con esta funcion se actualiza el estado del formulario, con los 3 puntos (...) se copian todas las propiedades actuales del objeto form y luego se actualiza la propiedad correspondiente al campo que se ha modificado.
  //Ademas con e.target.name se obtiene el nombre del campo que ha cambiado y con e.target.value se obtiene su nuevo valor. Ej (Si el usuario escribe en el campo "marca", e.target.name sera "marca" y e.target.value sera el valor que el usuario ha escrito)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //Definimos la función que se ejecuta cuando el usuario envía el formulario (hacer clic en el botón "Registrar").
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario.
    setVehiculos([...vehiculos, form]); //Esta línea agrega el nuevo vehículo al array de vehículos. (form representa el nuevo vehículo que se está registrando
    setForm({ marca: "", modelo: "", precio: "", año: "", descripcion: "" }); // Limpia el formulario después de enviarlo.
  };

  //Formulario de registro de vehículo ( en el atributo onSubmit se llama a la función handleSubmit cuando el formulario se envía)
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
