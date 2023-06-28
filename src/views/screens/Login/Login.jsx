import "./Login.styles.scss";

const Login = () => {
    return (
        <div className="login-container">
            <div className="bg-blue">
                <div className="container" style={{width: "100%", position: "relative", height:"100%"}}>
                    <header className="header">
                        <img
                            src="/images/logo-azul.png"
                            alt=""
                            className="logo"
                        />
                        <div className="col-md-6 d-flex align-items-center justify-content-end text-right m-0 p-0 logos-res">
                            <p className="m-0 mr-2 siguenos text-white">
                                Siguenos:
                            </p>
                            <img
                                src="/images/fece-b.png"
                                className="img-fluid mr-2"
                                alt="Responsive image"
                            />
                            <img
                                src="/images/insta-b.png"
                                className="img-fluid mr-2"
                                alt="Responsive image"
                            />
                            <img
                                src="/images/tik-b.png"
                                className="img-fluid mr-2"
                                alt="Responsive image"
                            />
                        </div>
                    </header>
                    {/** cartas */}
                    <div className="content ">
                        <div className="fila">
                            <div className="col-xl-5">
                                <div className="card-content">
                                    <div
                                        className="card card-res-tam"
                                        style={{
                                            width: 330,
                                            backgroundColor: "#ffff",
                                        }}
                                    >
                                        <div className="card-body">
                                            <h5 className="bienvenido mt-2 sospechar-res">
                                                Bienvenido
                                            </h5>
                                            <p className="card-text texto1 mb-3 text-sitio-res">
                                                Este sitio web está destinado
                                                para profesionales de la salud
                                                como tú
                                            </p>
                                            <button className="btn btn-primary btn-registra-res">
                                                ¿Primera vez? Registrate aquí{" "}
                                                <img
                                                    src="/images/flecha-white.png"
                                                    className="d-inline-block"
                                                    alt=""
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="class-cartas">
                                    <div
                                        className="card card-ingrsa card-aqui"
                                        style={{ width: 330, height: 408 }}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title title-form1">
                                                Ingresa aqui
                                            </h5>
                                            <form>
                                                <div className="form-group">
                                                    <label
                                                        className="text-label"
                                                        htmlFor="exampleInputEmail1"
                                                    >
                                                        Correo electronico*
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control border border-primary"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="exampleInputPassword1"
                                                        className="text-label"
                                                    >
                                                        Contraseña*
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control border border-primary"
                                                        id="exampleInputPassword1"
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary mt-3 entrar"
                                                >
                                                    Entrar
                                                    <img
                                                        src="/images/flecha-white2.png"
                                                        className="d-inline-block"
                                                        alt=""
                                                        style={{ marginLeft: 10 }}
                                                    />
                                                </button>
                                                <div className="mt-3">
                                                    <a
                                                        className="ancla1"
                                                        href="#"
                                                    >
                                                        <img
                                                            src="/images/flecha-azul.png"
                                                            className="d-inline-block"
                                                            alt=""
                                                            style={{ marginLeft: 4 }}
                                                        />{" "}
                                                        Olvide mi contraseña
                                                    </a>
                                                </div>
                                                <div className="radio ">
                                                    <input
                                                        type="radio"
                                                        id="html"
                                                        name="fav_language"
                                                        defaultValue="HTML"
                                                    />
                                                    <label
                                                        className="ancla1"
                                                        htmlFor="html"
                                                        style={{ marginLeft: 3 }}
                                                    >
                                                        Recordarme
                                                    </label>
                                                    <br />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
