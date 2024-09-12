// JavaScriptのクラス構文で"Dinosaur" クラスを定義すると、
// TypeScriptでも同名のクラス型として定義されます
class Dinosaur {
  name: string;
  period: string;

  constructor(name: string, period: string) {
    this.name = name;
    this.period = period;
  }

  // JavaScriptのクラス定義なので、メソッドの実体を定義できます
  isExtinct(): boolean {
    return true;
  }
}

// Dinosaur型はTypeScriptの型注釈に利用できます
const ankylosaurus: Dinosaur = new Dinosaur("アンキロサウルス", "白亜紀");
