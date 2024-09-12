// 交差型の例
type Color = { color: string };
type Point = { x: number; y: number };
type ColoredPoint = Color & Point;

const coloredPoint: ColoredPoint = {
  color: "red",
  x: 10,
  y: 20,
};
