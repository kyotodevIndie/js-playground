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
import { SellersTableDataMock, SellersTableHeadMock } from './mock'
import { ArrowsCounterClockwise, FileArrowDown } from '@phosphor-icons/react'
import { Pagination } from '../../Pagination'

export const SellersTable = () => {
  return (
    <>
      <VStack className="bg-base-00 border border-solid border-[#E9EFF6] w-[1350px] h-fit rounded-xl shadow-xl">
        <HStack className="w-full justify-between p-8">
          <HStack className="gap-3">
            <Text variant="paragraph1" className="text-slate-600 font-semibold">
              Por Vendedor
            </Text>
            <Badge variant={'neutral'} size={'xs'} type="filled">
              100 Membros
            </Badge>
          </HStack>
          <HStack className="gap-3">
            <Button size="sm" variant="primary">
              <FileArrowDown />
              Exportar csv
            </Button>
          </HStack>
        </HStack>
        <Table>
          <Thead>
            <Tr>
              {SellersTableHeadMock.map((head) => (
                <Th key={head}>
                  <Text variant="paragraph6" className="text-slate-400">
                    {head}
                  </Text>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {SellersTableDataMock.map(
              ({
                profilePicture,
                name,
                user,
                orderId,
                orderValue,
                chargeValue,
                serviceStatus,
                PaymentMethod,
                createdAt,
              }) => (
                <Tr key={orderId}>
                  <Td>
                    <HStack className="gap-4">
                      <Avatar src={profilePicture} size="md" shape="circle" />
                      <VStack className="items-start">
                        <Text
                          className="text-slate-600 font-medium"
                          variant="paragraph4"
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
                      {orderId}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {orderValue}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {chargeValue}
                    </Text>
                  </Td>
                  <Td>
                    <Badge size="xs" type="filled" variant="neutral">
                      <ArrowsCounterClockwise width={'18px'} height={'18px'} />
                      {serviceStatus}
                    </Badge>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {PaymentMethod}
                    </Text>
                  </Td>
                  <Td>
                    <Text className="text-slate-500" variant="paragraph5">
                      {createdAt}
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
