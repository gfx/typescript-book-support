// 哺乳類（Mammal）型
type Mammal = {
  speak(): string; // 鳴き声
  breed: string; // 品種
};

// catがMammalの持つプロパティをすべて持つことをsatisfies演算子で保証します
// catの型は`{ speak(): string; breed: "シャム" }`になります
const cat = {
  speak() {
    return "ニャー！";
  },
  breed: "三毛猫",
} as const satisfies Mammal;
