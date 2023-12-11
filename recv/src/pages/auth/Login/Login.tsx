import { Envelope, Key } from '@phosphor-icons/react'
import { HStack, Button, VStack, Text, InputIcon } from 'now-ui'
import ARECOLogo from '../../../assets/images/logos/arecoLogo.svg'
import BrandsLogos from '../../../assets/images/logos/brandsLogos.svg'
import LoginBackground from '../../../assets/images/loginBackground.svg'
import LoginIlust from '../../../assets/images/loginIlust.svg'

export const Login = () => {
  return (
    <HStack>
      <VStack className="bg-base-00 h-screen">
        <HStack>
          <img src={ARECOLogo} alt="Ar&Co Logo" />
          <HStack>
            <Text>ENCATAMENTO</Text>
            <Text>REC-V</Text>
            <Text>FAQ</Text>
          </HStack>
        </HStack>
        <img src={LoginIlust} alt="illustration" />
        <VStack>
          <Text>Entrar com e-mail e senha</Text>
          <InputIcon
            leftElement={<Envelope width="18px" height="18px" />}
            placeholder="example@email.com"
          />
          <InputIcon
            leftElement={<Key width="18px" height="18px" />}
            placeholder="Digite sua senha"
          />
          <Button>Entrar</Button>
          <Text>Esqueci minha senha</Text>
        </VStack>
        <img src={BrandsLogos} alt="Brand logo" />
        <Text>Precisa de ajuda? Envie um email para</Text>
        <a href="#">suporte@usereserva.com</a>
      </VStack>
      <img src={LoginBackground} alt="login background" />
    </HStack>
  )
}
