import { Maybe, Some, None } from '.'

interface User {
  name?: string // note that field may be absent
  id: string
}

const getName = (user: User): Maybe<string> => user.name 
  ? Some(user.name) 
  : None

const userWithName: User = { id: "1", name: "Blake" }
const userWithoutName: User = { id: "2" }

// result1 is of type Maybe<string> specifically Some<string>
export const result1 = getName(userWithName)

// result2 is of type Maybe<string> specifically None
export const result2 = getName(userWithoutName)