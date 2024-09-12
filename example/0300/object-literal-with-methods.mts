const language = {
  name: "TypeScript",
  releasedAt: 2012,

  // 新しい記法（ES2015+）
  getAge() {
    // ここでthisはlanguageが参照するオブジェクト
    return new Date().getFullYear() - this.releasedAt;
  },
};

console.log(language.getAge()); // => 10 （2022年に実行した場合）
