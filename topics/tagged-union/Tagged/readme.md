# Tagged

`Tagged` represents a single member of a Tagged Union.

For example:
```ts
interface None extends Tagged<"None"> {}
interface Some<A> extends Tagged<"Some"> {
  data: A
}

type Maybe<A> = None | Some<A>
```