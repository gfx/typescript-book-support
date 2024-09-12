type Point = {
  x: number;
  y: number;
};

const p: Point = {
  x: 10,
  y: 20,
  z: 30, // error!
  // error TS2322: Type '{ x: number; y: number; z: number; }' is not assignable to type 'Point'.
  // Object literal may only specify known properties, and 'z' does not exist in type 'Point'.
};
