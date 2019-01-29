import { match } from ".";
import { Maybe, MaybeTag, Some } from "../Maybe";

interface User {
  name: string
}

export const blake = match<Maybe<User>, string>(
  {
    [MaybeTag.None]: x => x.tag,
    [MaybeTag.Some]: x => x.data.name,
  },
  Some({ name: "blake" })
)