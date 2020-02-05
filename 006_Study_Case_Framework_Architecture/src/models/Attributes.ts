export class Attributes<T> {
  public data: T;
  // public attrbutes;

  constructor(dataObject: T) {
    this.data = dataObject;
  }

  // with getter as arrow - lexical this
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  getAll(): T {
    return this.data;
  }

  set(dataObject: T): void {
    this.data = Object.assign({}, this.data, dataObject);
  }
}
