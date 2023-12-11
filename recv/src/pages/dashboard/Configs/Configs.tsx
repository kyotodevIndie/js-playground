import {
  Avatar,
  HStack,
  Button,
  VStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  InputIcon,
} from 'now-ui'
import { Card } from '../../../components/Cards'
import CoinIcon from '../../../assets/icons/coinIcon.svg'
import AvatarMock from '../../../assets/images/avatar.svg'
import { FormatCurrency } from '../../../utils/formatMoney'
import { MagnifyingGlass, UserSwitch, UsersThree } from '@phosphor-icons/react'

type sellersTableConfigMockTypes = {
  name: string
  team: string
  profilePicture: string
  value: number
}

const goalsConfigMock = {
  overallGoal: '14500',
  individualGoal: 2500,
}

const sellersTableConfigMock = [
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 7467,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 7865,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 4356,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 2000,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 1234,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 789,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 1478,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 2000,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 2000,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 2000,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 2000,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 2000,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 2000,
  },
  {
    profilePicture: AvatarMock,
    name: 'Ralph Edwards',
    team: 'Reserva',
    value: 2000,
  },
]

export const Configs = () => {
  return (
    <VStack className="my-8 mx-16">
      <VStack className="items-start justify-start w-full mb-10">
        <Text variant="paragraph1" className="font-semibold">
          Configurações
        </Text>
        <Text variant="paragraph5" className="etxt-slate-500">
          Configure as metas
        </Text>
      </VStack>
      <HStack className="justify-start w-full gap-8 mb-3">
        <Text variant="paragraph1" className="font-semibold">
          Metas Gerais
        </Text>

        <Text variant="paragraph1" className="font-semibold">
          Outros
        </Text>
      </HStack>
      <HStack className="w-full border border-solid border-[#d9d9d9] rounded-md mb-8" />

      <HStack className="align-start gap-8">
        <Card p="40px 50px">
          <VStack className="items-start justify-start w-full gap-16">
            <VStack className="items-start gap-80">
              <VStack className="items-start">
                <Text variant="paragraph1" className="font-semibold">
                  Meta geral
                </Text>
                <Text variant="paragraph5" className="text-slate-500">
                  Insira o valor da meta geral mensal
                </Text>
              </VStack>

              <HStack>
                <img src={CoinIcon} alt="coin Icon" />
                <Text
                  variant="headline3"
                  className="font-medium text-slate-600"
                >
                  {FormatCurrency(goalsConfigMock.overallGoal)}
                </Text>
              </HStack>

              <HStack>
                <InputIcon
                  className="w-full rounded-[6px_0_0_6px]"
                  type="number"
                  variant="bordered"
                  leftElement={<Text>R$</Text>}
                  placeholder={FormatCurrency(
                    goalsConfigMock.overallGoal,
                    true,
                  )}
                />
                <Button
                  size="sm"
                  variant="primary"
                  className="w-full rounded-[0_6px_6px_0]"
                >
                  Enviar
                </Button>
              </HStack>
            </VStack>

            <VStack className="items-start gap-8">
              <VStack className="items-start">
                <Text variant="paragraph1" className="font-semibold">
                  Meta geral individual mensal
                </Text>
                <Text variant="paragraph5" className="text-slate-500">
                  Esta meta será aplicada para todos os atendentes
                </Text>
              </VStack>

              <HStack>
                <img src={CoinIcon} alt="coin Icon" />
                <Text
                  variant="headline3"
                  className="font-medium text-slate-600"
                >
                  {FormatCurrency(goalsConfigMock.individualGoal)}
                </Text>
              </HStack>

              <HStack>
                <InputIcon
                  className="w-full rounded-[6px_0_0_6px]"
                  type="number"
                  variant="bordered"
                  leftElement={<Text>R$</Text>}
                  placeholder={FormatCurrency(
                    goalsConfigMock.individualGoal,
                    true,
                  )}
                />
                <Button
                  size="sm"
                  variant="primary"
                  className="rounded-[0_6px_6px_0]"
                >
                  Enviar
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </Card>

        <Card p="40px 50px" align="start" h="80vh">
          <VStack className="items-start w-full gap-8">
            <HStack className="justify-between gap-10">
              <HStack>
                <VStack className="items-start">
                  <Text variant="paragraph1" className="font-semibold">
                    Metas individuais
                  </Text>
                  <Text variant="paragraph5" className="text-slate-500">
                    Insira o valor da meta por atendente ou equipe
                  </Text>
                </VStack>
              </HStack>
              <HStack className="gap-3">
                <Button variant="tertiary" className="bg-base-00">
                  <UserSwitch width="20px" height="20px" />
                  Filtrar por vendedor
                </Button>
                <Button variant="primary">
                  <UsersThree width="20px" height="20px" />
                  Filtrar por equipe
                </Button>
              </HStack>
            </HStack>

            <HStack>
              <InputIcon
                className="w-full rounded-[6px_0_0_6px]"
                type="text"
                variant="bordered"
                leftElement={<MagnifyingGlass />}
                placeholder="Nome, email, cpf e Tag"
              />
              <Button
                size="sm"
                variant="primary"
                className="rounded-[0_6px_6px_0]"
              >
                Buscar
              </Button>
            </HStack>
            <VStack className="w-full h-[50vh] overflow-auto justify-start">
              <Table>
                <Thead>
                  <Tr>
                    <Th>Todos os atendentes</Th>
                    <Th>Valor da meta individual</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {sellersTableConfigMock.map(
                    (
                      {
                        name,
                        team,
                        profilePicture,
                        value,
                      }: sellersTableConfigMockTypes,
                      index: number,
                    ) => (
                      <Tr key={index}>
                        <Td>
                          <HStack className="gap-3">
                            <Avatar src={profilePicture} size="md" />
                            <VStack className="align-start">
                              <Text
                                variant="paragraph4"
                                className="text-slate-600 font-medium"
                              >
                                {name}
                              </Text>
                              <Text
                                className="text-slate-500"
                                variant="paragraph6"
                              >
                                {team}
                              </Text>
                            </VStack>
                          </HStack>
                        </Td>
                        <Td>
                          <HStack>
                            <InputIcon
                              className="w-full rounded-[6px_0_0_6px]"
                              type="text"
                              variant="bordered"
                              leftElement={<Text>R$</Text>}
                              placeholder={FormatCurrency(value, true)}
                            />
                            <Button
                              size="sm"
                              variant="primary"
                              className="rounded-[0_6px_6px_0]"
                            >
                              Enviar
                            </Button>
                          </HStack>
                        </Td>
                      </Tr>
                    ),
                  )}
                </Tbody>
              </Table>
            </VStack>
          </VStack>
        </Card>
      </HStack>
    </VStack>
  )
}
