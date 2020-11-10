import React from "react"
import { Center } from "./styles"

export const Centered = ({ children, width }) => {
  return <Center width={width}> {children} </Center>
}

