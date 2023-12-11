import {
  Avatar,
  Badge,
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
} from 'now-ui'
import {
  AdministrativeTableDataMock,
  AdministrativeTableHeadMock,
} from './mock'
import { ArrowClockwise, Faders } from '@phosphor-icons/react'
import { Pagination } from '../../Pagination'

export const AdministrativeTable = () => {
  return (
    <>
      <VStack className="bg-base-00 border border-solid border-[#E9EFF6] w-[1350px] h-fit rounded-xl shadow-xl items-start">
        <HStack className="justify-between p-8 w-full">
          <HStack className="gap-3">
            <Text variant="paragraph1" className="text-slate-600 font-semibold">
              Por Vendedor
            </Text>
            <Badge variant="neutral" size="xs" type="filled">
              100 Membros
            </Badge>
          </HStack>
          <HStack className="gap-3">
            <Button variant="tertiary" className="bg-base-100">
              <Faders width="18px" height="18px" />
              Filtrar por seus atendimentos
            </Button>
            <Button variant="secondaryGray">
              <ArrowClockwise />
              Atualizar
            </Button>
          </HStack>
        </HStack>
        <Table>
          <Thead>
            <Tr>
              {AdministrativeTableHeadMock.map((head) => (
                <Th key={head}>
                  <Text variant="paragraph6" className="text-slate-400">
                    {head}
                  </Text>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {AdministrativeTableDataMock.map(
              ({
                profilePicture,
                name,
                user,
                sendCurrency,
                sendNumber,
                paymentCurrency,
                paymentNumber,
                tme,
                tmp,
                convertionNumber,
                convertionCurrency,
              }: any) => (
                <Tr key={user}>
                  <Td>
                    <HStack className="gap-4">
                      <Avatar src={profilePicture} size="md" shape="circle" />
                      <VStack className="items-start">
                        <Text
                          variant="paragraph5"
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
                      {sendCurrency}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {sendNumber}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {paymentCurrency}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {paymentNumber}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {tme}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {tmp}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {convertionNumber}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {convertionCurrency}
                    </Text>
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
