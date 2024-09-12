// TypeScript

// any型の場合
try {
  // ...
} catch (err: any) {
  // errはany型なので、err.messageなどの操作が許されます
  // しかし、プログラマーがなぜerr.messageが動くと考えたのかは自明ではありません
  console.warn(err.message);
}

// unknown型+型アサーションの場合（型安全ではない）
try {
  // ...
} catch (err: unknown) {
  // errはunknown型なので、err.messageなどの操作は許されません
  // しかし、errを具体的な型であるErrorに型アサーションで変更することで、err.messageなどの操作が許されます
  // ただし、型アサーションは型安全ではなく、このコードが通るかどうかはわかりません
  console.warn((err as Error).message);
}

// unknown型+型ガードの場合（型安全である）
try {
  // ...
} catch (err: unknown) {
  if (err instanceof Error) {
    // 型ガードによって、errはError型にナローイングされます
    // errはError型なので、err.messageなどの操作が許されます
    console.warn(err.message);
  } else {
    // errの中身に想定外の値が入っているので、とりあえずエラーにして投げておきます
    throw new Error(`Unexpected error: ${err}`);
  }
}
