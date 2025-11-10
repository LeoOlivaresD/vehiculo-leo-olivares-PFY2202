import Cabecera from "../components/Header";

function QuienesSomos() {
  return (
    <div>
      <Cabecera title="¿Quiénes Somos?" />
      <div className="container mt-4 mb-5 pb-5">
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title text-primary mb-4">
                  <i className="bi bi-building me-2"></i>
                  Sobre Vehículos Express
                </h4>
                <p className="lead">
                  Somos una empresa líder en la comercialización de vehículos nuevos y usados, 
                  comprometidos con ofrecer la mejor experiencia de compra a nuestros clientes.
                </p>
                
                <hr className="my-4" />
                
                <h5 className="text-primary mb-3">
                  <i className="bi bi-bullseye me-2"></i>
                  Nuestra Misión
                </h5>
                <p>
                  Facilitar el acceso a vehículos de calidad, brindando confianza, transparencia 
                  y un servicio excepcional en cada etapa del proceso de compra.
                </p>
                
                <h5 className="text-primary mb-3 mt-4">
                  <i className="bi bi-eye me-2"></i>
                  Nuestra Visión
                </h5>
                <p>
                  Ser reconocidos como la plataforma preferida para la compra y venta de vehículos, 
                  innovando constantemente en tecnología y servicio al cliente.
                </p>
                
                <h5 className="text-primary mb-3 mt-4">
                  <i className="bi bi-award me-2"></i>
                  Nuestros Valores
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <strong>Confianza:</strong> Garantizamos transparencia en cada transacción
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <strong>Calidad:</strong> Solo ofrecemos vehículos en óptimas condiciones
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <strong>Servicio:</strong> Atención personalizada y profesional
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <strong>Innovación:</strong> Tecnología de punta para mejor experiencia
                  </li>
                </ul>
                
                <div className="alert alert-info mt-4" role="alert">
                  <i className="bi bi-info-circle-fill me-2"></i>
                  <strong>¿Por qué elegirnos?</strong> Con más de 10 años de experiencia, 
                  hemos ayudado a miles de clientes a encontrar su vehículo ideal.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuienesSomos;