import 'bootstrap/dist/css/bootstrap.min.css';

export const Quienes = () => {
    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-4" style={{ color: '#28a745' }}>¿Quiénes Somos?</h1>
                <div className="card shadow" style={{ borderRadius: '0.5rem', backgroundColor: '#f8f9fa' }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: '#343a40' }}>Nuestra Misión</h5>
                        <p className="card-text" style={{ color: '#6c757d' }}>
                            En [Free Star], nos dedicamos a brindar soluciones tecnológicas innovadoras que mejoren la vida de nuestros clientes.
                        </p>
                        <hr />
                        <h5 className="card-title">Nuestro Equipo</h5>
                        <p className="card-text">
                            Contamos con un equipo de profesionales apasionados por la tecnología y el servicio al cliente. Nuestro compromiso es trabajar con integridad y transparencia para asegurar la satisfacción de nuestros clientes.
                        </p>
                        <hr />
                        <h5 className="card-title">Valores</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">🤝 Compromiso</li>
                            <li className="list-group-item">💡 Innovación</li>
                            <li className="list-group-item">🌍 Responsabilidad Social</li>
                            <li className="list-group-item">🔍 Transparencia</li>
                        </ul>
                        <div className="text-center mt-4">
                            <a href="#" className="btn btn-success">Conocer Más</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
