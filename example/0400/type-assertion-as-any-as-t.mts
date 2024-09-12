const a = "foo" as any as number; // aはnumber

console.log(a.toExponential()); // コンパイルは通るが実行するとエラーになります
