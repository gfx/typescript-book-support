class Base {
  hello() {
    console.log("This is an instance of Base!");
  }
}
class Derived extends Base {
  // override Base.prototype.hello()
  hello() {
    console.log("This is an instance of Derived!");
  }
}

const base = new Base();
base.hello(); // "This is an instance of Base!"

const derived = new Derived();
derived.hello(); // "This is an instance of Derived!"
