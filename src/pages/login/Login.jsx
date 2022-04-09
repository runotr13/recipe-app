
import React from 'react'
import {FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput} from './LoginStyles'
import meal from '../../assets/meal.svg'
const Login = () => {
  const user = {
    username : 'user',
  }
  const formSubmit = (e) => {
    
    e.preventDefault();
    sessionStorage.setItem('user',JSON.stringify(user))
    window.location.href = '/home'

  }
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} alt='meal'/>
        <Header>{"<Onur/>"}Recipe</Header>
        <StyledForm onSubmit={formSubmit}>
          <StyledInput type="text" placeholder='Username' required/>
          <StyledInput type="password" placeholder='Passaword' required/>
          <StyledButton type='submit'>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login