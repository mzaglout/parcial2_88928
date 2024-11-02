import 'bootstrap/dist/css/bootstrap.min.css';

export const Inicio = () => {
    return (
        <>
            <br /><br />

            {/* Jumbotron */}
            <div className="jumbotron text-center" style={{ backgroundColor: '#000', color: '#fff', borderRadius: '0.5rem', boxShadow: '0 4px 20px rgba(255,255,255,0.1)' }}>
                <h1 className="display-4">¡Bienvenido a TechSphere!</h1>
                <p className="lead">Aquí encontrarás soluciones tecnológicas innovadoras que mejoran tu vida.</p>
                <hr className="my-4" />
                <p>¡Explora nuestros productos y servicios para descubrir lo que podemos hacer por ti!</p>
                <a className="btn btn-outline-light btn-lg" href="#" role="button">Descubre más</a>
            </div>

            {/* Carousel */}
            <div id="carouselExample" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-3 rounded">
                            <h5 className="text-light">Innovación Constante</h5>
                            <p className="text-light">En TechSphere, estamos a la vanguardia de la tecnología para ofrecerte lo mejor.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-3 rounded">
                            <h5 className="text-light">Calidad y Confianza</h5>
                            <p className="text-light">Nuestros productos son de la más alta calidad, garantizando satisfacción a nuestros clientes.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 p-3 rounded">
                            <h5 className="text-light">Soporte 24/7</h5>
                            <p className="text-light">Estamos aquí para ayudarte en cualquier momento, con un soporte al cliente excepcional.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Siguiente</span>
                </a>
            </div>

            <br />

            {/* Cards */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-4 shadow" style={{ borderRadius: '0.5rem', backgroundColor: '#222', color: '#fff' }}>
                            <div className="card-body">
                                <h5 className="card-title">Soluciones Personalizadas</h5>
                                <p className="card-text">Desarrollamos software a medida para satisfacer las necesidades específicas de tu negocio.</p>
                                <a href="#" className="btn btn-outline-light">Ir a la acción</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-4 shadow" style={{ borderRadius: '0.5rem', backgroundColor: '#222', color: '#fff' }}>
                            <div className="card-body">
                                <h5 className="card-title">Consultoría Tecnológica</h5>
                                <p className="card-text">Te ofrecemos asesoramiento experto para mejorar la infraestructura tecnológica de tu empresa.</p>
                                <a href="#" className="btn btn-outline-light">Ir a la acción</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-4 shadow" style={{ borderRadius: '0.5rem', backgroundColor: '#222', color: '#fff' }}>
                            <div className="card-body">
                                <h5 className="card-title">Soporte y Mantenimiento</h5>
                                <p className="card-text">Proporcionamos servicios de soporte técnico para asegurar que tu tecnología funcione sin problemas.</p>
                                <a href="#" className="btn btn-outline-light">Ir a la acción</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
