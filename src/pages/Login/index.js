import React, { useContext, useState, useEffect } from "react"
import { navigate } from "@reach/router"
import { UserService } from "../../services"
import { UserFormLogin } from "../../Components/UserForm";
import { Context } from "../../Context"

export const Login = () => {
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
      let { data } = await userService.Login(input)
      activateAuth(data.token)

      navigate('/')
    } catch(error) {
      console.error(error)
      if (error.response?.data?.errors) {
        setErrorMessage(error.response.data.errors)
        return
      }
      
      setErrorMessage(error.response?.data?.message || "Can not login at this time")
    }  finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <UserFormLogin title="Iniciar Sesion" onSubmit={handleSubmit} error={errorMessage} disabled={isLoading} />
    </>
  )
}

