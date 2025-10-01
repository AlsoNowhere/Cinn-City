import { Cinnamon, CinnamonEvents, Point } from "cinnamon";

export const mode05 = (cinnamon: Cinnamon) => {
  cinnamon.reset();

  cinnamon.addEvents({ type: CinnamonEvents.MouseRotateCentre, target: cinnamon.target, options: { distance: 100 } });

  {
    const limit = 2;
    const gap = 7;
    let i = -limit;
    while (i <= limit) {
      let j = -limit;
      while (j <= limit) {
        let k = -limit;
        while (k <= limit) {
          cinnamon.points.push(
            new Point(i * gap, j * gap, k * gap, {
              colour: ["rgb(20, 20, 20)", 1.2],
              size: 7,
            }),
          );
          k++;
        }
        j++;
      }
      i++;
    }
  }

  cinnamon.render();
};
