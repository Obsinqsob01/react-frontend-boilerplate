import React, {useContext} from 'react';
import { UL, Link } from "./styles"
import { Context } from "../../Context"

export const RightNav = ({ open }) => {
  const { isAuth, removeAuth } = useContext(Context)

  return (
    <UL open={open}>
      <Link to='/'>Home</Link>
      {!isAuth && <Link to='/login'>Sign In</Link>}
      {!isAuth && <Link to='/register'>Sign Up</Link>}
      {isAuth && <Link to='#' onClick={removeAuth}>Sign out</Link>}
    </UL>
  )
}
