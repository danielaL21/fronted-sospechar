import "./Home.styles.scss";

const Home = () => {
    return (
        <div className="home-container">
            <div className="bg-blue">
                <div className="container">
                    <header className="header">
                        <img src="/images/logo.png" alt="" className="logo" />
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
                        <div className="row">
                            <div className="col-lg-5">
                            <div className="card-content">
                            <div
                                className="card card-res-tam"
                                style={{
                                    width: 330,
                                    height: "auto",
                                    backgroundColor: "#03598c",
                                }}
                            >
                                <div className="card-body">
                                    <h5 className="bienvenido mt-2 sospechar-res">
                                        Bienvenido a <br />
                                        Sospechar No Falla
                                    </h5>
                                    <p className="card-text texto1 mt-5 mb-3 text-sitio-res">
                                        En este sitio web encontrarás 
                                        información relevante sobre como 
                                        prevenir, sospechar y convivir con
                                        enfermedades como la falla cardiaca,
                                        enfermedad renal crónica y diabetes.
                                    </p>
                                </div>
                            </div>
                            </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="class-cartas">
                                    <img
                                        src="/images/todos.png"
                                        className=" img-contenido  img-res-1"
                                        alt="Responsive image"
                                    />
                                    <img
                                        src="/images/contenido.png"
                                        className=" img-contenido img-res-2  ml-3"
                                        alt="Responsive image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Home;
