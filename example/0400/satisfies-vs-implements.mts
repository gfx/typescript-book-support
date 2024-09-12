type Mammal = {
  speak(): string;
};

// Pig classがMammalの持つプロパティをすべて持つことをimplements演算子で保証します
class Pig implements Mammal {
  speak() {
    return "Oink!";
  }

  // implementsを使う場合は、Mammalにはないプロパティやメソッドを追加で定義できます
  wildAncestor = "boar";
}

const pig = new Pig();
