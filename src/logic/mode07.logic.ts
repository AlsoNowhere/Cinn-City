import { Cinnamon, CinnamonEvents, Point } from "cinnamon";

import { generateCactus } from "../services/generate-cactus.service";

export const mode07 = (cinnamon: Cinnamon) => {
  cinnamon.reset();

  cinnamon.addEvents({ type: CinnamonEvents.MouseRotateCentre });

  const size = 5;
  // cinnamon.polygons.push(...generateCactus(new Point(0, size * -3, 0), size, "rgba(50, 200, 50, 0.4)"));
  cinnamon.polygons.push(...generateCactus(new Point(0, size * -3, 0), size, "rgba(50, 200, 50, 1)"));

  cinnamon.render();
};
