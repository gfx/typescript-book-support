function g<T>(x: T) {
  console.log({ x });
}
// このときg()の具体的な型は `g<number>(x: number): void` となっています
g(42); //  => { x: 42 }

// このときg()の具体的な型は `g<string>(x: string): void` となっています
g("foo"); //  => { x: "foo" }
