// Dinosaur (恐竜)　型の定義。Dinosaurは、種の名前 (name) と生息時期 (period) を持ちます
type TDinosaur = {
  name: string;
  period: string;
};

// 型注釈で使う
const ankylosaurus: TDinosaur = {
  name: "アンキロサウルス",
  period: "白亜紀",
};
