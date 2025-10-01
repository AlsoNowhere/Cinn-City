import { useEffect, useRef, useState } from "react";

import { Cinnamon } from "cinnamon";

import { Header } from "./structure/Header.component";

import "./App.scss";
import { AppContext } from "../contexts/app.context";

let devCatch = 0;

export const App = () => {
  const [cinnamon, setCinnamon] = useState<Cinnamon>();

  // const canvasElementRef = useRef<HTMLCanvasElement>(null);
  const svgElementRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // ** Should run once.
    if (devCatch++ !== 0) return;

    setTimeout(() => {
      // const element = canvasElementRef.current ?? null;
      const element = svgElementRef.current ?? null;

      if (element === null) return;

      const newCinnamon = new Cinnamon(element);
      setCinnamon(newCinnamon);
      window.addEventListener("resize", () => {
        newCinnamon.resize();
        newCinnamon.render();
      });
    }, 0);
  }, []);

  return (
    <AppContext.Provider value={{ cinnamon }}>
      <Header />

      <main>
        {/* <canvas ref={canvasElementRef}></canvas> */}
        <svg ref={svgElementRef}></svg>
      </main>
    </AppContext.Provider>
  );
};
