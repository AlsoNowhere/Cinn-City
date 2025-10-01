import { Cinnamon, CinnamonEvents, Point } from "cinnamon";

export const mode04 = (cinnamon: Cinnamon) => {
  cinnamon.reset();

  cinnamon.addEvents({ type: CinnamonEvents.MouseRotateCentre, target: cinnamon.target, options: { distance: 100 } });

  {
    const limit = 10;
    const gap = 6;
    let i = -limit;
    while (i <= limit) {
      let j = -limit;
      while (j <= limit) {
        let k = -limit;
        while (k <= limit) {
          cinnamon.points.push(
            new Point(i, j, k, {
              colour: "rgb(100, 100, 100)",
              size: [1.8, 40],
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
