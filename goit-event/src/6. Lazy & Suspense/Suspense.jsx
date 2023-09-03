const fetchData = () => {
  return fetch("https://api.example.com/data").then((response) =>
    response.json()
  );
};

const DataComponent = () => {
  const data = fetchData();

  return (
    <div>
      <h2>Datos Asincrónicos</h2>
      <p>{data}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <React.Suspense fallback={<div>Cargando...</div>}>
        <DataComponent />
      </React.Suspense>
    </div>
  );
}
