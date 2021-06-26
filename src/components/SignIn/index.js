import React from 'react'
import { Container,
         FormWrap,
         Icon,
         FormContent,
         Form,
         FormH1,
         FormLabel,
         FormInput, 
         FormButton, 
         Text } from './SigninElements'

function SignIn() {
    return (
        <>
          <Container>
             <FormWrap>
                 <Icon to="/">Dolla</Icon>
                 <FormContent>
                     <Form action="#">
                         <FormH1> Sign in to your code </FormH1>
                         <FormLabel htmlForm='for'> Email </FormLabel>
                         <FormInput type='email' required/>
                         <FormLabel htmlForm='for'> Password </FormLabel>
                         <FormInput type='email' required/>
                         <FormButton type='submit'>Continue</FormButton>
                         <Text> Forgot Password </Text>
                     </Form>
                 </FormContent>
            </FormWrap>    
          </Container>  
        </>
    )
}   
export default SignIn