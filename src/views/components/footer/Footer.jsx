import { Fragment } from "react";
/** Styles */
import "./Footer.styles.scss";

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-between  m-0 p-0 align-items-center">
                        <div className="col-lg-9 d-flex justify-content-around legales-res">
                            <p className="legal">
                                <span className="legales"> Aviso legal </span>{" "}
                                <br />
                                Lo invitamos a disfrutar del contenido a
                                continuación teniendo en cuenta que está sujeto
                                a derechos de propiedad intelectual. Este
                                material podría contener conceptos u opiniones
                                que son responsabilidad de los autores y no
                                comprometen las opiniones del laboratorio
                                auspiciante. Boehringer Ingelheim S.A. Teléfono:
                                (+57 1) 319 91 00, e-mail:
                                medfora.co@boehringer-ingelheim.com Dirección:
                                Carrera 11 No. 84A-09 Piso 5, Bogotá D.C.
                                Colombia. PC-CO-104088.
                            </p>
                        </div>
                        <div
                            className="col-lg-3 legales-res1"
                            style={{
                                backgroundColor: "#03598c",
                                maxWidth: 289,
                            }}
                        >
                            <p className="legal1 mt-4">
                                <span className="legales"> Contacto </span>
                                <br />
                                Teléfono: (+601) 319 91 00
                                <br />
                                e-mail: medfora.co@boehringer-ingelheim.com
                                <br />
                                Dirección: Carrera 11 No. 84A-09 Piso 5<br />
                                Bogotá D.C. Colombia
                                <br />
                                Boehringer Ingelheim S.A.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brands p-3">
                <div className="container">
                    <div className="row logos-resp m-auto p-0 align-items-center">
                        <div className="col-lg-9 col-sm-12 m-0 p-0 boehringer-res">
                            <img
                                src="/images/footer1.png"
                                className="img-fluid logotermino"
                                alt="Responsive image"
                                style={{ maxWidth: "92%", marginLeft: "30px" }}
                            />
                        </div>
                        
                        <div className="col-lg-3 col-sm-12 m-0 p-0 terminos-resp">
                            <a className="terminos" href="#">
                                Términos y condiciones
                            </a>
                            <a className="terminos" href="#">
                                Política de cookies
                            </a>
                            <a className="terminos" href="#">
                                Privacidad de datos
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-0  class-copy">
                <div
                    className="col-12 m-0  text-center"
                >
                    <p className="text-fin">
                        © 2010-2023 Boehringer Ingelheim GmbH Todos los derechos
                        Reservados
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;
