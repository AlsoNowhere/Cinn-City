import { Cinnamon, CinnamonEvents, Point } from "cinnamon";

export const mode03 = (cinnamon: Cinnamon) => {
  cinnamon.reset();

  cinnamon.addEvents({ type: CinnamonEvents.MouseRotateCentre, target: cinnamon.target, options: { distance: 150 } });

  {
    const limit = 14;
    const gap = 5;
    const baseColour = 120;
    let i = -limit;
    while (i <= limit) {
      let j = -limit;
      while (j <= limit) {
        let k = -limit;
        while (k <= limit) {
          cinnamon.points.push(
            new Point(i, j, k, {
              colour: `rgb(${baseColour + k * 10}, ${baseColour + j * 10}, ${baseColour + i * 10})`,
              size: 1.8,
            }),
          );
          k += gap;
        }
        j += gap;
      }
      i += gap;
    }
  }

  cinnamon.render();
};
