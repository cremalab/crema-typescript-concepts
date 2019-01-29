export const enum ResTag {
  Loading = "Loading",
  Success = "Success",
  Error = "Error",
}

interface Loading {
  tag: ResTag.Loading
}
interface Error {
  tag: ResTag.Error
  message: string
}
interface Success<A> {
  tag: ResTag.Success
  data: A
}
export type Res<A> = Loading | Error | Success<A>

// Constructors
export const Loading: Loading = { tag: ResTag.Loading }
export const Error = (x: string): Error => ({ tag: ResTag.Error, message: x })
export const Success = <A>(x: A): Success<A> => ({ tag: ResTag.Success, data: x })
