import { Cinnamon, CinnamonEvents, Point } from "cinnamon";

import { generateSquare } from "../services/shapes/square.service";

export const mode01 = (cinnamon: Cinnamon) => {
  cinnamon.reset();

  cinnamon.addEvents({ type: CinnamonEvents.MouseRotateCentre, target: cinnamon.target });

  {
    const { polygons, lines } = generateSquare(new Point(0, 0, 0), 5, { colour: "rgb(255, 0, 0)" });
    cinnamon.polygons.push(...polygons);
    cinnamon.lines.push(...lines);
  }

  cinnamon.render();
};
