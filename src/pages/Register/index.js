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
  })

  const handleSubmit = async function(input) {
    try {
      setIsLoading(true)
      let { data } = await userService.Register(input)
      activateAuth(data.token)

      navigate('/')
    } catch(error) {

      console.error(error)
      if (error.response?.data?.errors) {
        setErrorMessage(error.response.data.errors)
        return
      }
      
      setErrorMessage(error.response?.data?.message || "Can not register at this time")
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

