// flow-typed signature: b362cdded9921922e195b23b2ee49a96
// flow-typed version: <<STUB>>/q_v1.5.1/flow_v0.61.0


declare class Q$Promise<R> {
  then<U>(callback: (R) => U): Q$Promise<$Call<Q$Promised<U>, U>>;
  catch<U>(callback: (e: Error) => U): Q$Promise<U>;
  done(callback: () => void): void;
}

declare type Q$Promised<A> = <
  Value: A,
  PromisedValue: Q$Promise<Value>
>(p: PromisedValue | Value) => Value

declare type UnwrapIfNeeded<T> = $Call<Q$Promised<T>, T>;

declare module 'q' {
  declare function Q$resolve<T>(T): Q$Promise<UnwrapIfNeeded<T>>
  declare function Q$reject<E: Error>(err: E): Q$Promise<E>;

  // declare export var all: Function;
  // declare export default typeof Q$resolve;
  declare module.exports: {
    $call: typeof Q$resolve;
    // all: typeof Q$all,
    reject: typeof Q$reject
  }
}
