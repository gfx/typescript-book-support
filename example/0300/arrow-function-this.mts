// strict modeかどうかで束縛されていないthisの挙動が異なるので、
// thisの微妙な振る舞いを検証するときはstrict modeであることを確認するべきです
"use strict";

const object = {
  prop: 42, // あるプロパティpropを持つオブジェクト

  method() {
    // メソッドの中ではthisはレシーバを参照します
    console.log(this); // => { prop: 42, method: ... }

    // functionの中のthisは型注釈なしだとimplicit anyでエラーになるので、
    // ここでは明示的にany型にします
    const f = function (this: any) {
      console.log(this);
    };
    // そのまま呼ぶとthisはundefined
    f(); // => undefined

    // thisを束縛（bind）することもできます
    f.bind(this)(); // => { prop: 42, method: ... }

    // アロー演算子の場合、thisは外側のスコープを参照します
    // 言い換えれば、Function.prototype.bind でthisを束縛した状態がデフォルト
    // なお束縛のリセットはできません
    const a = () => {
      console.log(this);
    };
    a(); // => { prop: 42, method: ... }
  },
};

object.method();
