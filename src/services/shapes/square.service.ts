import { Line, Point, Polygon } from "cinnamon";

import { darkerColour } from "../darker-colour.service";

interface IOptions {
  colour?: string;
}

export const generateSquare = (centre: Point, size: number, options: IOptions = {}) => {
  const polygonOptions = {
    colour: options.colour ?? "#fff",
  };

  const darkColour = darkerColour(polygonOptions.colour, 0.5);

  const lineOptions = {
    colour: darkColour,
    thickness: 2,
    ignore: false,
  };

  const { x, y, z } = centre;
  const half = size / 2;

  // ** Front
  const topLeftFront = new Point(x - half, y + half, z + half);
  const bottomRightFront = new Point(x + half, y - half, z + half);
  const bottomLeftFront = new Point(x - half, y - half, z + half);
  const topRightFront = new Point(x + half, y + half, z + half);

  // ** Rear
  const topLeftRear = new Point(x - half, y + half, z - half);
  const bottomLeftRear = new Point(x - half, y - half, z - half);
  const bottomRightRear = new Point(x + half, y - half, z - half);
  const topRightRear = new Point(x + half, y + half, z - half);

  const polygons: Array<Polygon> = [];

  const addPolygon = (points: Array<Point>) => polygons.push(new Polygon([...points], polygonOptions));

  // ** Front
  addPolygon([topLeftFront, bottomLeftFront, bottomRightFront, topRightFront]);

  // ** Left
  addPolygon([topLeftFront, topLeftRear, bottomLeftRear, bottomLeftFront]);

  // ** Rear
  addPolygon([topLeftRear, topRightRear, bottomRightRear, bottomLeftRear]);

  // ** Right
  addPolygon([topRightFront, topRightRear, bottomRightRear, bottomRightFront]);

  // ** Top
  addPolygon([topLeftFront, topLeftRear, topRightRear, topRightFront]);

  // ** Bottom
  addPolygon([bottomLeftFront, bottomLeftRear, bottomRightRear, bottomRightFront]);

  const lines: Array<Line> = [];

  const addLine = (a: Point, b: Point) => lines.push(new Line(a, b, lineOptions));

  // ** Front
  addLine(topLeftFront, bottomLeftFront);
  addLine(bottomLeftFront, bottomRightFront);
  addLine(bottomRightFront, topRightFront);
  addLine(topRightFront, topLeftFront);

  // ** Left
  addLine(topLeftFront, topLeftRear);
  addLine(topLeftRear, bottomLeftRear);
  addLine(bottomLeftRear, bottomLeftFront);
  addLine(bottomLeftFront, topLeftFront);

  // ** Rear
  addLine(topLeftRear, topRightRear);
  addLine(topRightRear, bottomRightRear);
  addLine(bottomRightRear, bottomLeftRear);
  addLine(bottomLeftRear, topLeftRear);

  // ** Right
  addLine(topRightFront, topRightRear);
  addLine(topRightRear, bottomRightRear);
  addLine(bottomRightRear, bottomRightFront);
  addLine(bottomRightFront, topRightFront);

  // ** Top
  addLine(topLeftFront, topLeftRear);
  addLine(topLeftRear, topRightRear);
  addLine(topRightRear, topRightFront);
  addLine(topRightFront, topLeftFront);

  // ** Bottom
  addLine(bottomLeftFront, bottomLeftRear);
  addLine(bottomLeftRear, bottomRightRear);
  addLine(bottomRightRear, bottomRightFront);
  addLine(bottomRightFront, bottomLeftFront);

  return { polygons, lines };
};
