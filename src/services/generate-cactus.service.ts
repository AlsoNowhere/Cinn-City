import { Polygon, Point } from "cinnamon";

export const generateCactus = ({ x, y, z }: Point, size: number, colour: string) => {
  const s = size;
  const hs = size / 2;

  const getPolygon = (points: Array<Array<number>>) => {
    return new Polygon(
      points.map(([x, y, z]) => new Point(x, y, z)),
      { colour },
    );
  };

  const frontZ = z + hs;
  const rearZ = z - hs;

  return [
    // ** Base
    getPolygon([
      [x - hs, y, frontZ],
      [x + hs, y, frontZ],
      [x + hs, y, rearZ],
      [x - hs, y, rearZ],
    ]),

    // ** Front side
    getPolygon([
      [x - hs, y, frontZ],
      [x - hs, y + s * 2, frontZ],
      [x - (hs + s * 2), y + s * 2, frontZ],
      [x - (hs + s * 2), y + s * 4, frontZ],
      [x - (hs + s), y + s * 4, frontZ],
      [x - (hs + s), y + s * 3, frontZ],
      [x - hs, y + s * 3, frontZ],
      [x - hs, y + s * 6, frontZ],
      [x + hs, y + s * 6, frontZ],
      [x + hs, y + s * 4, frontZ],
      [x + hs + s, y + s * 4, frontZ],
      [x + hs + s, y + s * 5, frontZ],
      [x + hs + s * 2, y + s * 5, frontZ],
      [x + hs + s * 2, y + s * 3, frontZ],
      [x + hs, y + s * 3, frontZ],
      [x + hs, y, frontZ],
    ]),

    // ** Rear side
    getPolygon([
      [x - hs, y, rearZ],
      [x - hs, y + s * 2, rearZ],
      [x - (hs + s * 2), y + s * 2, rearZ],
      [x - (hs + s * 2), y + s * 4, rearZ],
      [x - (hs + s), y + s * 4, rearZ],
      [x - (hs + s), y + s * 3, rearZ],
      [x - hs, y + s * 3, rearZ],
      [x - hs, y + s * 6, rearZ],
      [x + hs, y + s * 6, rearZ],
      [x + hs, y + s * 4, rearZ],
      [x + hs + s, y + s * 4, rearZ],
      [x + hs + s, y + s * 5, rearZ],
      [x + hs + s * 2, y + s * 5, rearZ],
      [x + hs + s * 2, y + s * 3, rearZ],
      [x + hs, y + s * 3, rearZ],
      [x + hs, y, rearZ],
    ]),

    // ** Top
    getPolygon([
      [x - hs, y + s * 6, frontZ],
      [x + hs, y + s * 6, frontZ],
      [x + hs, y + s * 6, rearZ],
      [x - hs, y + s * 6, rearZ],
    ]),

    // ** Left arm top
    getPolygon([
      [x - (hs + s * 2), y + s * 4, frontZ],
      [x - (hs + s), y + s * 4, frontZ],
      [x - (hs + s), y + s * 4, rearZ],
      [x - (hs + s * 2), y + s * 4, rearZ],
    ]),

    // ** Left arm inside horizontal
    getPolygon([
      [x - (hs + s), y + s * 3, frontZ],
      [x - hs, y + s * 3, frontZ],
      [x - hs, y + s * 3, rearZ],
      [x - (hs + s), y + s * 3, rearZ],
    ]),

    // ** Left arm under
    getPolygon([
      [x - hs, y + s * 2, frontZ],
      [x - (hs + s * 2), y + s * 2, frontZ],
      [x - (hs + s * 2), y + s * 2, rearZ],
      [x - hs, y + s * 2, rearZ],
    ]),

    // ** Left arm side
    getPolygon([
      [x - (hs + s * 2), y + s * 2, frontZ],
      [x - (hs + s * 2), y + s * 4, frontZ],
      [x - (hs + s * 2), y + s * 4, rearZ],
      [x - (hs + s * 2), y + s * 2, rearZ],
    ]),

    // ** Left arm inside veritcal
    getPolygon([
      [x - (hs + s), y + s * 3, frontZ],
      [x - (hs + s), y + s * 4, frontZ],
      [x - (hs + s), y + s * 4, rearZ],
      [x - (hs + s), y + s * 3, rearZ],
    ]),

    // ** Left side under
    getPolygon([
      [x - hs, y, frontZ],
      [x - hs, y + s * 2, frontZ],
      [x - hs, y + s * 2, rearZ],
      [x - hs, y, rearZ],
    ]),

    // ** Left side above
    getPolygon([
      [x - hs, y + s * 3, frontZ],
      [x - hs, y + s * 6, frontZ],
      [x - hs, y + s * 6, rearZ],
      [x - hs, y + s * 3, rearZ],
    ]),

    // ** Right arm top
    getPolygon([
      [x + (hs + s * 2), y + s * 5, frontZ],
      [x + (hs + s), y + s * 5, frontZ],
      [x + (hs + s), y + s * 5, rearZ],
      [x + (hs + s * 2), y + s * 5, rearZ],
    ]),

    // ** Right arm inside
    getPolygon([
      [x + (hs + s), y + s * 4, frontZ],
      [x + hs, y + s * 4, frontZ],
      [x + hs, y + s * 4, rearZ],
      [x + (hs + s), y + s * 4, rearZ],
    ]),

    // ** Right arm under
    getPolygon([
      [x + hs, y + s * 3, frontZ],
      [x + (hs + s * 2), y + s * 3, frontZ],
      [x + (hs + s * 2), y + s * 3, rearZ],
      [x + hs, y + s * 3, rearZ],
    ]),

    // ** Right arm side
    getPolygon([
      [x + (hs + s * 2), y + s * 3, frontZ],
      [x + (hs + s * 2), y + s * 5, frontZ],
      [x + (hs + s * 2), y + s * 5, rearZ],
      [x + (hs + s * 2), y + s * 3, rearZ],
    ]),

    // ** Right arm inside veritcal
    getPolygon([
      [x + (hs + s), y + s * 4, frontZ],
      [x + (hs + s), y + s * 5, frontZ],
      [x + (hs + s), y + s * 5, rearZ],
      [x + (hs + s), y + s * 4, rearZ],
    ]),

    // ** Right side under
    getPolygon([
      [x + hs, y, frontZ],
      [x + hs, y + s * 3, frontZ],
      [x + hs, y + s * 3, rearZ],
      [x + hs, y, rearZ],
    ]),

    // ** Right side above
    getPolygon([
      [x + hs, y + s * 4, frontZ],
      [x + hs, y + s * 6, frontZ],
      [x + hs, y + s * 6, rearZ],
      [x + hs, y + s * 4, rearZ],
    ]),
  ];
};
