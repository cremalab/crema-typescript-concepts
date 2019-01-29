import { Maybe, MaybeTag, None, Some } from "."

function maybeToString<A>(x: Maybe<A>): string {
  switch (x.tag) {
    case MaybeTag.None:
      return "none"
    case MaybeTag.Some:
      return "some"
  }
}

export const thing = maybeToString(Some(2))

interface User {
  name: string
}

const head = <A>(xs: A[]): Maybe<A> => (xs[0] === undefined ? None : Some(xs[0]))

const users: User[] = []

export const firstUser = head(users)
