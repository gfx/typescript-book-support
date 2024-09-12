const language = {
  name: "TypeScript",
  releasedAt: 2012,

  // 古い記法（ES5以前）
  getAge: function () {
    return new Date().getFullYear() - this.releasedAt;
  },
};

console.log(language.getAge()); // => 12 （2024年に実行した場合）
