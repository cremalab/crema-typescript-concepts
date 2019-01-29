export const enum MaybeTag {
  None = "None",
  Some = "Some"
}

interface None {
  tag: MaybeTag.None
}

interface Some<A> {
  tag: MaybeTag.Some
  data: A
}

export type Maybe<A> = None | Some<A>

// Constructors
export const None: None = { tag: MaybeTag.None }
export const Some = <A>(x: A): Some<A> => ({ tag: MaybeTag.Some, data: x })