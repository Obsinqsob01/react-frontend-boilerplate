import React, { useContext } from "react"
import { Context } from "../../Context"

const HomePage = () => {
  const { isAuth } = useContext(Context)

  if (isAuth) {
    return <>
      Hola usuario
    </>
  }

  return <>
    Hola desconocido, inicia sesion
  </>
}

export const Home = React.memo(HomePage)
