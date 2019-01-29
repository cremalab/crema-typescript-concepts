import { Tagged } from "../Tagged"

export const enum ResTag {
  Loading = "Loading",
  Success = "Success",
  Error = "Error",
}

interface Loading extends Tagged<ResTag.Loading> {}
interface Error extends Tagged<ResTag.Error> {
  message: string
}
interface Success<A> extends Tagged<ResTag.Success> {
  data: A
}
export type Res<A> = Loading | Error | Success<A>

// Constructors
export const Loading: Loading = { tag: ResTag.Loading }
export const Error = (x: string): Error => ({ tag: ResTag.Error, message: x })
export const Success = <A>(x: A): Success<A> => ({ tag: ResTag.Success, data: x })
