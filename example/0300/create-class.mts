// ClassにcustomMethod()を追加した新しいクラスを返します
function createExtendedClass<Class extends new (...args: any[]) => any>(
  baseClass: Class,
) {
  return class ExtendedClass extends baseClass {
    //　カスタムメソッドを定義します
    customMethod() {
      console.log("This is a custom method in the extended class.");
    }
  };
}

class MyBaseClass {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const MyClass = createExtendedClass(MyBaseClass);
const instance = new MyClass("John");

instance.sayHello(); // "Hello, my name is John."
instance.customMethod(); // "This is a custom method in the extended class."
