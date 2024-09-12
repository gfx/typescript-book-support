// IDinosaur型の定義
interface IDinosaur {
  name: string;
}
//　二度目のIDinosaur型の定義は、最初のIDinosaur型にマージされます
interface IDinosaur {
  period: string;
}

// IDinosaur型は、nameとperiodの2つのプロパティを持ちます
const ankylosaurus: IDinosaur = {
  name: "アンキロサウルス",
  period: "白亜紀",
};
