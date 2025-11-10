import { useState } from "react";
import Cabecera from "../components/Header";

function Contacto() {
  const [formContacto, setFormContacto] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormContacto({ ...formContacto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setFormContacto({ nombre: "", email: "", telefono: "", mensaje: "" });
    
    setTimeout(() => {
      setEnviado(false);
    }, 5000);
  };

  return (
    <div>
      <Cabecera title="Contáctanos" />
      <div className="container mt-4 mb-5 pb-5">
        <div className="row">
          {/* Formulario de Contacto */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="card-title text-primary mb-4">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Envíanos un Mensaje
                </h4>
                
                {enviado && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <strong>¡Mensaje enviado!</strong> Te contactaremos pronto.
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setEnviado(false)}
                    ></button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Nombre Completo</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formContacto.nombre}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Ej: Juan Pérez"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formContacto.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="ejemplo@correo.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formContacto.telefono}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="+56 9 1234 5678"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={formContacto.mensaje}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                      placeholder="¿En qué podemos ayudarte?"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    <i className="bi bi-send-fill me-2"></i>
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="card-title text-primary mb-4">
                  <i className="bi bi-info-circle-fill me-2"></i>
                  Información de Contacto
                </h4>

                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                    Dirección
                  </h6>
                  <p className="text-muted ms-4">
                    Av. Principal 1234, Santiago, Chile
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="bi bi-telephone-fill text-success me-2"></i>
                    Teléfono
                  </h6>
                  <p className="text-muted ms-4">
                    +56 9 1234 5678<br />
                    +56 2 1234 5678
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="bi bi-envelope-fill text-primary me-2"></i>
                    Email
                  </h6>
                  <p className="text-muted ms-4">
                    info@vehiculosexpress.cl<br />
                    ventas@vehiculosexpress.cl
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="bi bi-clock-fill text-warning me-2"></i>
                    Horario de Atención
                  </h6>
                  <p className="text-muted ms-4">
                    Lunes a Viernes: 9:00 - 19:00<br />
                    Sábados: 10:00 - 14:00<br />
                    Domingos: Cerrado
                  </p>
                </div>

                <hr />

                <div className="text-center">
                  <h6 className="fw-bold mb-3">Síguenos en Redes Sociales</h6>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="btn btn-outline-info btn-sm">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-outline-danger btn-sm">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="btn btn-outline-success btn-sm">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;