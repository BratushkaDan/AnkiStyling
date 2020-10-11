const isString = (test: any): test is string => typeof test === 'string';
const hasParam: <T>(object: T, prop: 'string') => boolean = (obj, prop) => prop in obj;
/* protected constructor, getters and setters */
class Person {
  static readonly age: number = 30;
  protected constructor(protected _name: string) {}
  // Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about.
  public get name() {
    return this._name;
  }
  public set name(newName: string) {
    this._name = newName;
  }
}
isString;
hasParam;
let a = Person;