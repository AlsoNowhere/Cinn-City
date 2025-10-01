import { Cinnamon, CinnamonEvents, Point } from "cinnamon";

import { generateSquare } from "../services/shapes/square.service";

export const mode02 = (cinnamon: Cinnamon) => {
  cinnamon.reset();

  cinnamon.addEvents({ type: CinnamonEvents.MouseRotateCentre, target: cinnamon.target });

  {
    const { polygons, lines } = generateSquare(new Point(0, 0, 0), 15, { colour: "rgb(65, 55, 225)" });
    cinnamon.polygons.push(...polygons);
    cinnamon.lines.push(...lines);
  }

  cinnamon.render();
};
