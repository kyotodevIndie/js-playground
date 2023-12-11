import {
  Avatar,
  Badge,
  HStack,
  VStack,
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from 'now-ui'
import { UsersTableDataMock, UsersTableHeadMock } from './mock'
import { DotsThree, UserCirclePlus, Wrench } from '@phosphor-icons/react'
import { Pagination } from '../../Pagination'

export const UsersTable = () => {
  return (
    <>
      <VStack className="bg-base-00 border border-solid border-[#E9EFF6] w-[1350px] h-fit rounded-xl shadow-xl">
        <HStack className="w-full justify-between p-8">
          <HStack className="gap-3">
            <Text variant="paragraph1" className="text-slate-600 font-semibold">
              Por Vendedor
            </Text>
            <Badge variant="neutral" size="xs" type="filled">
              100 Membros
            </Badge>
          </HStack>
          <HStack className="gap-3">
            {/* <Button
              leftIcon={<UserCircleMinus width={'18px'} height={'18px'} />}
              variant="terciary"
              bg="$base100"
            >
              Excluir usuário
            </Button> */}
            <Button variant={'secondaryGray'}>
              <UserCirclePlus />
              Adicionar usuário
            </Button>
          </HStack>
        </HStack>
        <Table>
          <Thead>
            <Tr>
              {UsersTableHeadMock.map((head) => (
                <Th key={head}>
                  <Text variant="paragraph6" className="text-slate-400">
                    {head}
                  </Text>
                </Th>
              ))}
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {UsersTableDataMock.map(
              ({ profilePicture, name, email, cpf, status }) => (
                <Tr key={cpf}>
                  <Td>
                    <Avatar src={profilePicture} size="md" shape="circle" />
                  </Td>

                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {name}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {email}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {cpf}
                    </Text>
                  </Td>
                  <Td>
                    <Badge size="xs" type="filled" variant="neutral">
                      <Wrench width={'18px'} height={'18px'} />
                      {status}
                    </Badge>
                  </Td>
                  <Td>
                    <DotsThree
                      width={'20px'}
                      height={'20px'}
                      style={{ transform: 'rotate(90deg)', cursor: 'pointer' }}
                    />
                  </Td>
                </Tr>
              ),
            )}
          </Tbody>
        </Table>
      </VStack>
      <Pagination />
    </>
  )
}
