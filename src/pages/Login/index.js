import React, { useContext, useState } from "react"
import { navigate } from "@reach/router"
import { UserService } from "../../services"
import { UserFormLogin } from "../../Components/UserForm";
import { Context } from "../../Context"

export const Login = () => {
  const userService = UserService();
  const { activateAuth } = useContext(Context)
  const [ errorMessage, setErrorMessage ] = useState("")

  const handleSubmit = async function(input) {
    try {
      let token = await userService.Login(input)
      activateAuth(token)

      navigate('/')
    } catch(error) {
      setErrorMessage(error.response.data.message)
      console.error(error)
    }
  }

  return (
    <>
      <UserFormLogin title="Iniciar Sesion" onSubmit={handleSubmit} error={errorMessage}/>
    </>
  )
}

