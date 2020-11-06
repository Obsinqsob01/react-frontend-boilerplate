import React from 'react';
import { UL, Link } from "./styles"

export const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <Link>Home</Link>
      <Link>Sign In</Link>
      <Link>Sign Up</Link>
    </UL>
  )
}
