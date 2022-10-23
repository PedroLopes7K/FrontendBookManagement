import { Link } from 'react-router-dom'

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand">Controle Pessoal de Livros</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a to="/" className="nav-link">
              Inclusão
            </a>
          </li>
          <li className="nav-item">
            <a to="/manut" className="nav-link">
              Manutenção
            </a>
          </li>
          <li className="nav-item">
            <a to="/resumo" className="nav-link">
              Resumo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MenuSuperior
