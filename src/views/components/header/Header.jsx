import "./Header.styles.scss";

const Header = () => {
    return (
        <div className="header-container">
            <div className="bg-blue">
                <div className="container">
                    <header className="header">
                        <img
                            src="/images/logo-gris.png"
                            alt=""
                            className="logo"
                        />
                        <nav className="navigation">
                            <ul className="navbar-nav align-items-center active">
                                <li className="nav-item active web">
                                    <a
                                        className="nav-link  text-center"
                                        href="#"
                                    >
                                        Sobre
                                        <br /> Sospechar No Falla
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item active web">
                                    <a
                                        className="nav-link  text-center"
                                        href="#"
                                    >
                                        Sobre <br /> la patología
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </a>
                                    <i className="fa-sharp fa-solid fa-chevron-down" />
                                </li>
                                <li className="nav-item web">
                                    <a className="nav-link " href="#">
                                        Diagnóstico
                                    </a>
                                </li>
                                <li className="nav-item web">
                                    <a
                                        className="nav-link  text-center"
                                        href="#"
                                    >
                                        Conciencia y<br /> prevención
                                    </a>
                                </li>
                                <li className="nav-item ml-5 ">
                                    <a
                                        className="nav-link "
                                        href="#"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        Ir a web para todos
                                    </a>
                                </li>
                                <li className="nav-item ml-3 usericon">
                                    <div className="dropdown">
                                        <button
                                            className="drow dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src="/images/logo-user.png"
                                                width={40}
                                                height={40}
                                                className="d-inline-block align-top"
                                                alt=""
                                            />
                                        </button>

                                        {/* menu user desplegable */}
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton"
                                            style={{ backgroundColor: "#d7d8da" }}
                                        >
                                            <div className="text-center">
                                                <img
                                                    src="/images/icono-user.png"
                                                    width={60}
                                                    height={60}
                                                    className="d-inline-block align-top"
                                                    alt=""
                                                />
                                            </div>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Hola, Nombre Apellido
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Cambiar foto de perfil
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Actualizar datos
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Favoritos
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Cerrar sesión
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
                <div className="mesas">
                    <p>CONTENIDO PARA PROFESIONALES DE LA SALUD</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
