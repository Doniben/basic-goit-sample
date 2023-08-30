import React from "react";
const LazyComponent = React.lazy(() => import("./LazyComponent"));

export function LazyApp() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </React.Suspense>
    </div>
  );
}

