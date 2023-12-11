import { Faders, FileArrowDown, FileSearch } from '@phosphor-icons/react'
import { HStack, Button, VStack, Input, Text, InputIcon } from 'now-ui'
import { ServicesTable } from '../../../components/Tables/ServicesTable'

export const Services = () => {
  return (
    <VStack className="items-start my-8 mx-16">
      <HStack className="justify-between w-full mb-5">
        <VStack className="items-start">
          <Text variant="paragraph1" className="font-semibold">
            Painel de Atendimento
          </Text>
          <Text variant="paragraph5" className="text-slate-500">
            veja a lista de Atendimento e seus status
          </Text>
        </VStack>
        <Button size="sm" variant="primary">
          <FileArrowDown />
          Exportar csv
        </Button>
      </HStack>
      <HStack className="my-10 justify-between w-full">
        <HStack>
          <InputIcon
            type="text"
            variant="bordered"
            leftElement={<FileSearch width="20px" height="20px" />}
            placeholder="O que deseja buscar?"
            className="rounded-[6px_0_0_6px]"
          />
          <Button size="sm" variant="primary" className="rounded-[0_6px_6px_0]">
            Buscar
          </Button>
        </HStack>
        <HStack className="gap-3">
          <Input
            variant="bordered"
            type="date"
            placeholder="Maio 12, 2023 - Maio13, 2023"
          />
          <InputIcon
            variant="bordered"
            type="text"
            placeholder="Falhas"
            leftElement={<Faders width={'18px'} height={'18px'} />}
          />
        </HStack>
      </HStack>
      <ServicesTable />
    </VStack>
  )
}
