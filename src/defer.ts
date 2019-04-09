export class PromiseHolder<T> {
  constructor(resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) {
    this._resolve = resolve;
    this._reject = reject;
  }

  private _resolve: (value?: T | PromiseLike<T>) => void;

  public get resolve(): (value?: T | PromiseLike<T>) => void {
    return this._resolve;
  }

  private _reject: (reason?: any) => void;

  public get reject(): (reason?: any) => void {
    return this._reject;
  }
}
