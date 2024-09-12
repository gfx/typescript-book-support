// コンパイルエラーになる例
let value: string | number;

// trueはbooleanで、stringにもnumberにも代入不可なため、string | numberにも代入できません！
value = true;
// error TS2322: Type 'boolean' is not assignable to type 'string | number'.
