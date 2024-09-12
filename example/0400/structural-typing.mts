// クラスCの定義と、TypeScriptの型Cの宣言
class C {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// 型Tの宣言
type T = {
  name: string;
};

// TとCは同じ構造なので、キャストすることなく相互に代入が可能です
const t: T = new C("instance of C");
const c: C = t;

console.log(t); // C { name: 'instance of C' }
console.log(c); // C { name: 'instance of C' }
