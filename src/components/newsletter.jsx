import { Description, Title } from '@mui/icons-material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div``
const Title = styled.div``
const Desc = styled.div``
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.div``

export const newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc></Desc>
        <InputContainer>
            <Input/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}
