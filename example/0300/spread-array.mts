const values = [1, 2];

// 配列リテラルの初期化子としてスプレッド構文を使います
const values2 = [10, 20, ...values]; // [10, 20, 1, 2]

// リストの最初に置くこともできます
const values3 = [...values, 10, 20]; // [1, 2, 10, 20]
