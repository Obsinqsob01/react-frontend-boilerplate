import React, {useContext} from 'react';
import { UL, Link } from "./styles"
import { Context } from "../../Context"

export const RightNav = ({ open }) => {
  const { isAuth, removeAuth } = useContext(Context)

  if (isAuth) {
    return (
      <UL open={open}>
        <Link to='/'>Home</Link>
        <Link to='#' onClick={removeAuth}>Sign out</Link>
      </UL>
    )
  }

  return (
    <UL open={open}>
      <Link to='/login'>Sign In</Link>
      <Link to='/register'>Sign Up</Link>
    </UL>
  )
}
