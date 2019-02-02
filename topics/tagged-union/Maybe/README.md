# Maybe

The `Maybe` type models an optional value explicitly and is a Tagged Union of `None` and `Some<A>`.

Why not just use `null` (or `undefined`)? Clarity. While `null` may be used to represent the absence of a value, this must be done by convention as it carries no inherent meaning. A function that returns a value _or_ null (or undefined) may do so for any variety of reasons—none of which is clear to the user of that function. This can be the cause of many bugs and the source of much frustration 😖.

## Example

### Definition

```ts
type Maybe<A> = None | Some<A>
```

> Simplified version. See [index.ts](./index.ts) for the full definition.

### Usage

> Read this as a single file with comments interspersed

First, we import the `Maybe` type along with its Member Constructors. A Member Constructor is either a constant value (e.g `None`) or a function when that member is parameterized (e.g. `Some<A>`). So to clarify, `Maybe` is a *type*. `Some` and `None` are *Member Constructors* (e.g. code).

```ts
import { Maybe, Some, None } from '.'
...
```

Next we define a `User` interface for later use.

```ts
...

interface User {
  name?: string // note that field may be absent
  id: string
}

...
```

Now we add code that utilizes the `Maybe` type. `getName` is a function that has a signature of `User → Maybe<string>`, meaning it takes a `User` and returns a `Maybe<string>`.

```ts
...

const getName = (user: User): Maybe<string> => user.name 
  ? Some(user.name) 
  : None

const userWithName: User = { id: "1", name: "Blake" }
const userWithoutName: User = { id: "2" }

// result1 is of type Maybe<string> specifically Some<string>
const result1 = getName(userWithName)

// result2 is of type Maybe<string> specifically None
const result2 = getName(userWithoutName)

...
```

This is all fine and good, but how do I actually _use_ the the `string` (`user.name`) that is maybe contained inside `Maybe<string>` 🥁? Let's head over to [match](../match/README.md) to see how.
