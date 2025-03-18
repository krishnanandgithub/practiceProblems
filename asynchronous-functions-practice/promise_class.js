class MyPromise {
  resolve(value) {
    
  }
  reject(value) {
  }
  constructor(executor) {
    executor(this.resolve.bind(this), this.reject.bind(this));
  }
}
