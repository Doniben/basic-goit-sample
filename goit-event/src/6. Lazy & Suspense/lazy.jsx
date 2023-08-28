// Carga diferida de un componente
const LazyComponent = React.lazy(() => import("./LazyComponent"));

// Renderizado en un componente
function App() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <React.Suspense fallback={<div>Cargando...</div>}>
        <LazyComponent />
      </React.Suspense>
    </div>
  );
}
