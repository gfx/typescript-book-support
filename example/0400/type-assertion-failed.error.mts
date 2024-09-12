// このコードはコンパイルエラーになります

const a = "foo" as number;
// error TS2352: Conversion of type 'string' to type 'number' may be a mistake
// because neither type sufficiently overlaps with the other. If this was
// intentional, convert the expression to 'unknown' first.
