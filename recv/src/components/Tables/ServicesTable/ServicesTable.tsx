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
import { ServicesTableDataMock, ServicesTableHeadMock } from './mock'
import {
  ArrowClockwise,
  ArrowLeft,
  ArrowRight,
  ArrowsCounterClockwise,
  Faders,
} from '@phosphor-icons/react'
import { Pagination } from '../../Pagination'

export const ServicesTable = () => {
  return (
    <>
      <VStack className="bg-base-00 border border-solid border-[#E9EFF6] w-[1350px] h-fit rounded-xl shadow-xl">
        <HStack className="w-full justify-between p-8">
          <HStack className="gap-3">
            <Text variant="paragraph1" className="text-slate-600 font-semibold">
              Por Vendedor
            </Text>
            <Badge variant="neutral" size="xs" type="filled">
              100 falhas
            </Badge>
          </HStack>
          <HStack className="gap-3">
            <Button variant="tertiary" className="bg-base-100">
              <Faders width={'18px'} height={'18px'} />
              Filtrar por seus atendimentos
            </Button>
            <Button variant={'secondaryGray'}>
              <ArrowClockwise />
              Atualizar
            </Button>
          </HStack>
        </HStack>
        <Table>
          <Thead>
            <Tr>
              {ServicesTableHeadMock.map((head) => (
                <Th key={head}>
                  <Text variant="paragraph5" color="$slate400">
                    {head}
                  </Text>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {ServicesTableDataMock.map(
              ({
                profilePicture,
                name,
                user,
                id,
                code,
                customer,
                value,
                brand,
                createdAt,
                status,
              }) => (
                <Tr key={id}>
                  <Td>
                    <HStack className="gap-4">
                      <Avatar src={profilePicture} size="md" shape="circle" />
                      <VStack className="items-start">
                        <Text
                          variant="paragraph4"
                          className="text-slate-600 font-medium"
                        >
                          {name}
                        </Text>
                        <Text className="text-slate-500" variant="paragraph6">
                          {user}
                        </Text>
                      </VStack>
                    </HStack>
                  </Td>

                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {id}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {code}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {customer}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {value}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {brand}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {createdAt}
                    </Text>
                  </Td>
                  <Td>
                    <Badge size="xs" type="filled" variant="neutral">
                      <ArrowsCounterClockwise width={'18px'} height={'18px'} />
                      {status}
                    </Badge>
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
