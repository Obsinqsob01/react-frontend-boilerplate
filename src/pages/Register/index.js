import React, { useContext, useState, useEffect } from "react"
import { navigate } from "@reach/router"
import { UserService } from "../../services"
import { UserFormRegister } from "../../Components/UserForm";
import { Context } from "../../Context"

export const Register = () => {
  const userService = UserService();
  const { activateAuth } = useContext(Context)
  const [ errorMessage, setErrorMessage ] = useState("") 
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    const ac = new AbortController()

    return () => ac.abort();
  }, [])

  const handleSubmit = async function(input) {
    try {
      setIsLoading(true)
      let token = await userService.Login(input)
      activateAuth(token)

      navigate('/')
    } catch(error) {
      setErrorMessage(error.response.data.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <UserFormRegister title="Registro" onSubmit={handleSubmit} error={errorMessage} disabled={isLoading}/>
    </>
  )
}

