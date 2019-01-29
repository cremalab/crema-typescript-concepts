import { Error, Loading, Res, ResTag, Success } from "."
import { match } from "../match"

interface User {
  name: string
}

function updateUserInStore(d: User): void {}
function displayErrorMessage(m: string): void {}

export const handleUserResponse = match<Res<User>, void>({
  [ResTag.Loading]: () => {},
  [ResTag.Error]: d => displayErrorMessage(d.message),
  [ResTag.Success]: d => updateUserInStore(d.data),
})

handleUserResponse(Error("Something went wrong"))
handleUserResponse(Loading)
handleUserResponse(Success({ name: "rob" }))
