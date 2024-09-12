// `(a: number) => boolean`型の戻り値型はboolean型なので、ReturnType1はboolean型になります
type ReturnType1 = ReturnType<(a: number) => boolean>;
// => boolean

// Array.of<number>()の戻り値型は、number[]型 (Array<number>) なので、
// ReturnType2はnumber[]型になります
type ReturnType2 = ReturnType<typeof Array.of<number>>;
// => number[]
