// メソッドを持つオブジェクト型の定義
type TDinosaur = {
  name: string;
  period: string;

  // メソッドスタイルでの型定義
  // このメソッドは、引数を取らず、booleanを返します
  isExtinct(): boolean;

  // プロパティスタイルでの型定義
  // このメソッドもisExtinct()と同様に引数を取らずbooleanを返します
  isAnimal: () => boolean;
};
