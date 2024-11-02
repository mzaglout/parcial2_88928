import 'bootstrap/dist/css/bootstrap.min.css';

export const NoEncontrado = () => {
    return (
        <>
            <div className="container text-center" style={{ marginTop: '100px' }}>
                <h1 className="display-4" style={{ color: '#ff4d4d' }}>404</h1>
                <h2 className="my-4" style={{ color: '#fff' }}>Página No Encontrada</h2>
                <p className="lead" style={{ color: '#bbb' }}>
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                </p>
                <a href="/" className="btn btn-outline-light btn-lg">Volver a Inicio</a>
            </div>
        </>
    );
};
