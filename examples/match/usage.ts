import { match } from "."
import { Maybe, MaybeTag, Some } from "../Maybe"

interface User {
  name: string
}

const matchUser = match<Maybe<User>, string>({
  [MaybeTag.None]: x => x.tag,
  [MaybeTag.Some]: x => x.data.name,
})

export const blake = matchUser(Some({ name: "blake" })) // "blake"
