export const Cabecera = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/inicio"><img src="public/IconoMenubar.webp" alt="Descripción de la imagen" width="50" height="50"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/inicio">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="*">
                  Features
                </a>
              </li>
            

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pricing por Equipos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/ElectronicoRegistrar">
                      Registrar Electronicos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="Eleadm">
                      Administrar Equipos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="ElectronicoListar">
                      listar Electronicos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Quien">
                  Quienes somos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
