import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #35469c;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${props => props.backgroundImage};
`

export const TextContent = styled.p`
  font-size: ${props => props.activeOptionId};
`
export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const CustomLabel = styled.label`
  color: #7e858e;
`

export const CustomInput = styled.input`
  border: 1px solid #7e858e;
`
export const CustomSelect = styled.select`
  background-color: #ffffff;
`

export const CustomOption = styled.option`
  color: #7e858e;
`

export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border: none;
  padding: 10px;
`
