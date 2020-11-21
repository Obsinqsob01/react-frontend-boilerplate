import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Title, Button } from './styles'
import { Centered } from '../Layouts/Centered'

export const UserFormLogin = ({ disabled, error, title, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      {error.length > 1 && typeof error === Array? error.map(err => <Error key={err}>- {err}</Error>): error && <Error>{error}</Error>}
      <Centered width="50%">
        <Form disabled={disabled} onSubmit={handleSubmit}>
          <Title>{title}</Title>
          <Input placeholder='Email' {...email} />
          <Input placeholder='Password' type='password' {...password} />
          <Button onClick={handleSubmit}>{title}</Button>
        </Form>
      </Centered>
    </>
  )
}

export const UserFormRegister = ({ disabled, error, title, onSubmit }) => {
  const name = useInputValue('')
  const lastName = useInputValue('')
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ name: name.value, lastName: lastName.value, email: email.value, password: password.value })
  }

  return (
    <>
      {error.length > 1 && typeof error === Array? error.map(err => <Error key={err}>- {err}</Error>): error && <Error>{error}</Error>}
      <Centered width="50%">
        <Form disabled={disabled} onSubmit={handleSubmit}>
          <Title>{title}</Title>
          <Input placeholder='Name' {...name} />
          <Input placeholder='Last Name' {...lastName} />
          <Input placeholder='Email' {...email} type="email" />
          <Input placeholder='Password' type='password' {...password} />
          <Button onClick={handleSubmit}>{title}</Button>
        </Form>
      </Centered>
    </>
  )
}

