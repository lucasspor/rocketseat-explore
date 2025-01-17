import { Container, Form, Avatar, InputWrapper } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
          <ButtonText to="/home" icon={FiArrowLeft} title="Voltar" isActive />
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/lucasspor.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <InputWrapper>
          <div>
            <Input
              placeholder="Nome"
              type="text"
              icon={FiUser} />
            <Input
              placeholder="Email"
              type="text"
              icon={FiMail} />
          </div>
          <div>
            <Input
              placeholder="Senha atual"
              type="password"
              icon={FiLock} />
            <Input
              placeholder="Nova senha"
              type="password"
              icon={FiLock} />
          </div>
        </InputWrapper>
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}