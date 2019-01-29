type Cases<A extends { tag: B }, R, B extends string | number | symbol = B> = {
  [K in A["tag"]]: A extends { tag: K } ? (x: A) => R : never
}

export function match<
  A extends { tag: B },
  R,
  B extends string | number | symbol = B,
  V extends A = V
>(cases: Cases<A, R, B>, v: A): R {
  const c = cases[v.tag]
  return c(v)
}