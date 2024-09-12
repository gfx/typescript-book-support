// オブジェクトの分割代入
type XY = { x: number; y: number };
const { x, y }: XY = { x: 10, y: 20 };
console.log({ x, y }); // => { x: 10, y: 20 }
