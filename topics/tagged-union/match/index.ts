import { Maybe, MaybeTag, Some } from "../Maybe"
import { Tagged } from "../Tagged"

type MatchCases<A extends Tagged<B>, R, B extends PropertyKey = B> = {
  [K in A["tag"]]: A extends Tagged<K> ? (x: A) => R : never
}

export const match = <
  TaggedUnion extends Tagged<Tag>,
  Return,
  Tag extends PropertyKey = Tag
>(
  cases: MatchCases<TaggedUnion, Return, Tag>
) => (v: TaggedUnion): Return => {
  const c = cases[v.tag]
  return c(v)
}

interface User {
  name: string
}

const matchUser = match<Maybe<User>, string>({
  [MaybeTag.None]: x => x.tag,
  [MaybeTag.Some]: x => x.data.name,
})

export const blake = matchUser(Some({ name: "blake" })) // "blake"
