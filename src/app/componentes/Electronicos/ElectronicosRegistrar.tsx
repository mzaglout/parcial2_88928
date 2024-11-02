import 'bootstrap/dist/css/bootstrap.min.css';

export const ElectronicosRegistrar = () => {
    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-4" style={{ color: '#ffc107' }}>Registrar Electrónico</h1>
                <div className="card shadow" style={{ borderRadius: '0.5rem', backgroundColor: '#f8f9fa' }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: '#343a40' }}>Formulario de Registro</h5>
                        <p className="card-text" style={{ color: '#6c757d' }}>
                            Completa el siguiente formulario para registrar un nuevo dispositivo electrónico.
                        </p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="deviceName" className="form-label">Nombre del Dispositivo</label>
                                <input type="text" className="form-control" id="deviceName" placeholder="Ingrese el nombre del dispositivo" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="deviceModel" className="form-label">Modelo</label>
                                <input type="text" className="form-control" id="deviceModel" placeholder="Ingrese el modelo del dispositivo" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="deviceCategory" className="form-label">Categoría</label>
                                <select className="form-select" id="deviceCategory" required>
                                    <option value="">Seleccione una categoría</option>
                                    <option value="smartphone">Smartphone</option>
                                    <option value="tablet">Tablet</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="accesorio">Accesorio</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="deviceDescription" className="form-label">Descripción</label>
                                <textarea className="form-control" id="deviceDescription" placeholder="Ingrese una descripción del dispositivo" required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Registrar Dispositivo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
