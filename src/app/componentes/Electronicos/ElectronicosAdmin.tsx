import 'bootstrap/dist/css/bootstrap.min.css';

export const ElectronicoAdmin = () => {
    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-4" style={{ color: '#17a2b8' }}>Administración Electrónica</h1>
                <div className="card shadow" style={{ borderRadius: '0.5rem', backgroundColor: '#f8f9fa' }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: '#343a40' }}>Bienvenido a la sección de administración</h5>
                        <p className="card-text" style={{ color: '#6c757d' }}>
                            Desde aquí podrás gestionar todos los dispositivos electrónicos disponibles en el sistema.
                        </p>
                        <hr />
                        <h6 className="card-subtitle mb-2 text-muted">Opciones de administración:</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">🔧 Agregar nuevo dispositivo</li>
                            <li className="list-group-item">✏️ Editar información de dispositivo</li>
                            <li className="list-group-item">🗑️ Eliminar dispositivo</li>
                            <li className="list-group-item">📋 Ver estadísticas de dispositivos</li>
                        </ul>
                        <div className="text-center mt-4">
                            <button className="btn btn-info">Gestionar Dispositivos</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
