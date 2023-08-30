import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";

const LazyComponent = () => {
  const [rendeLazy, setRenderLazy] = useState("");

  setTimeout(() => {
    console.log("Retrasado por 3 segundo.");
    setRenderLazy("El Componente ha cargado");
  }, "3000");

  return (
    <div>
      <React.Suspense
        fallback={
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        }
      >
        {rendeLazy}
      </React.Suspense>
    </div>
  );
};

export default LazyComponent;
