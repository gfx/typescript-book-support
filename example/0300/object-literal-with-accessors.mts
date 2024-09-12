const language = {
  name: "TypeScript",
  releasedAt: 2012,

  // アクセサ (getter)
  get age() {
    return new Date().getFullYear() - this.releasedAt;
  },
};

console.log(language.age); // => 12 （2024年に実行した場合）
