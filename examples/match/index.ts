type Cases<A extends { tag: B }, R, B extends string | number | symbol = B> = {
  [K in A["tag"]]: A extends { tag: K } ? (x: A) => R : never
}

export const match = <
  TaggedUnion extends { tag: Tag },
  Return,
  Tag extends string | number | symbol = Tag
>(
  cases: Cases<TaggedUnion, Return, Tag>
) => (v: TaggedUnion): Return => {
  const c = cases[v.tag]
  return c(v)
}
