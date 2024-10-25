import { Input } from '../../components/input'
import { FiMail, FiLock } from "react-icons/fi"
import { Container, Form } from './styles'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function Signing() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input icon={FiMail} placeholder="E-mail"/>
        <Input icon={FiLock} placeholder="Senha"/>

        <Button title="Entrar"/>

        <ButtonText title="Criar conta" isActivite/>
      </Form>
    </Container>
  )

}