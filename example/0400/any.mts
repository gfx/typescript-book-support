const str: any = "foo";

// StringにnothingToDo()というメソッドは存在しないので
// `: any` がなければ次の行はコンパイルエラーになりますが、
// any型なので実行時にのみエラーが報告されます
str.nothingToDo();
