type ReturnType<Fn extends (...args: any) => any> = Fn extends (
  ...args: any
) => infer R
  ? R
  : any;
