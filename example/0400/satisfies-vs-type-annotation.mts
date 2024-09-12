// 哺乳類（Mammal）型
type Mammal = {
  speak(): string;
  breed: string;
};

// dogがMammalの持つプロパティをすべて持つことを型注釈で保証します
// dogの型はMammal ({ speak(): string, breed: string }) になります
const dog: Mammal = {
  speak() {
    return "ワン！";
  },
  breed: "セントバーナード",
};
