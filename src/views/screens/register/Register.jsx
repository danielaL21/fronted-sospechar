import "./Register.styles.scss";

const Register = () => {
    return (
        <div className="register-container">
            <div className="bg-blue">
                <div
                    className="container"
                    style={{
                        width: "100%",
                        position: "relative",
                        height: "100%",
                    }}
                >
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
                    <div
                        className="container d-flex align-items-center mt-5 p-3"
                        style={{ backgroundColor: "white" }}
                    >
                        <div className="row m-0 p-0 align-items-center">
                            <div className=" col-12 col-md-8  m-0">
                                <h3 className="title-registro">Registro</h3>
                                <form className="">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Nombres*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Apellidos*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Tipo de profesional*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Tipo de especialidad*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Tarjeta profesional*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Institución donde labora*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="País*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Ciudad*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Correo electrónico*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Teléfono*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Contraseña*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control "
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Repetir contraseña*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-4 ">
                                <div className=" mt-5 text ">
                                    <h3 className="bienvenidos">Bienvenido</h3>
                                    <p className="eres">
                                        Si ya eres un usuario registrado,
                                        <br />
                                        <a className="eres" href="#">
                                            haz click aquí
                                        </a>
                                    </p>
                                </div>
                                <div className="">
                                    <button
                                        type="button"
                                        className="btn entrar1"
                                    >
                                        Enviar{" "}
                                        <img
                                            src="/images/flecha-white2.png"
                                            className="d-inline-block"
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <div className=" mt-3">
                                    <p className="autorizo">
                                        *Camplos obligatorios
                                    </p>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="defaultCheck1"
                                        />
                                        <label
                                            className="form-check-label t-autorizo p-0"
                                            htmlFor="defaultCheck1"
                                        >
                                            Autorizo expresamente a Boehringer
                                            Ingelheim S.A., en calidad de
                                            responsable del tratamiento, paraque
                                            por sí mismo o en asocio con
                                            terceros, realice el tratamiento de
                                            los datos personales aquí
                                            suministrados con las finalidades
                                            precisadas en el siguiente aviso de
                                            privacidad. Para más información
                                            consulte nuestra “Política de
                                            Tratamiento de Datos Personales”
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="content ">
                        <div className="fila">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Register;
