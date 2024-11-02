import 'bootstrap/dist/css/bootstrap.min.css';

export const ElectronicoListar = () => {
    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-4" style={{ color: '#28a745' }}>Listar Electrónicos</h1>
                <div className="card shadow" style={{ borderRadius: '0.5rem', backgroundColor: '#f8f9fa' }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: '#343a40' }}>Bienvenido a la sección de listado</h5>
                        <p className="card-text" style={{ color: '#6c757d' }}>
                            Aquí podrás ver la lista de todos tus dispositivos electrónicos disponibles.
                        </p>
                        <hr />
                        <h6 className="card-subtitle mb-2 text-muted">Dispositivos disponibles:</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">1. Smartphone - Modelo XYZ</li>
                            <li className="list-group-item">2. Tablet - Modelo ABC</li>
                            <li className="list-group-item">3. Laptop - Modelo 123</li>
                        </ul>
                        <div className="text-center mt-4">
                            <button className="btn btn-success">Ver Detalles</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
