import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";

const LazyComponent = () => {
  const [rendeLazy, setRenderLazy] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Retrasado por 3 segundos.");
      setRenderLazy(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <React.Suspense
        fallback={
          <CirclesWithBar
            height={100}
            width={100}
            color="#4fa94d"
            visible={true}
            ariaLabel="circles-with-bar-loading"
          />
        }
      >
        {rendeLazy ? (
          // Mostrar el contenido del componente aquí después del retraso
          <p>El Componente ha cargado</p>
        ) : (
          // En caso contrario, se mostrará el loader
          <div><CirclesWithBar
          height={100}
          width={100}
          color="#4fa94d"
          visible={true}
          ariaLabel="circles-with-bar-loading"
        /></div>
        )}
      </React.Suspense>
    </div>
  );
};

export default LazyComponent;



