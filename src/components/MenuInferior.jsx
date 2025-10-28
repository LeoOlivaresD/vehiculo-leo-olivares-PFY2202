import { Link } from 'react-router-dom';

function MenuInferior() {
  return (
    <nav className="fixed-bottom bg-light p-3 d-flex justify-content-around border-top">
      <Link to="/" className="btn btn-outline-primary">Inicio</Link>
      <Link to="/quienes-somos" className="btn btn-outline-primary">Quiénes somos</Link>
      <Link to="/contacto" className="btn btn-outline-primary">Contacto</Link>
    </nav>
  );
}
export default MenuInferior;
