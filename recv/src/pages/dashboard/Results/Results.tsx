import { MagnifyingGlass } from '@phosphor-icons/react'
import { HStack, Button, VStack, Input, Text, InputIcon } from 'now-ui'
import ShoppingCart from '../../../assets/icons/shoppingCartIcon.svg'
import Ticket from '../../../assets/icons/ticketIcon.svg'
import Headset from '../../../assets/icons/headsetIcon.svg'
import Check from '../../../assets/icons/checkIcon.svg'
import whatsapp from '../../../assets/icons/whatsappIcon.svg'
import Users from '../../../assets/icons/usersIcon.svg'
import { InfoCard, BigInfoCard } from '../../../components/Cards'
import { SellersTable } from '../../../components/Tables/SellersTable'

const resultsMocks = {
  convertedValue: 14456.56,
  conversionRateFailure: 200,
  conversionRateSend: 200,
  totalCartsSent: 200,
  totalCartsPaid: 200,
  tme: 200,
  tmp: 200,
  Attendances: 200,
  Finalized: 200,
  whatsApp: 200,
  queue: 200,
}

export const Results = () => {
  return (
    <VStack className="my-8 mx-16 items-start mb-5 gap-8">
      <VStack className="items-start">
        <Text variant="paragraph1" className="font-semibold">
          Resultados Gerais
        </Text>
        <Text variant="paragraph5" className="text-slate-500">
          Resultados gerais painel Rec-v
        </Text>
      </VStack>

      <HStack className="w-full justify-between">
        <HStack>
          <InputIcon
            className="w-fill rounded-[6px_0_0_6px]"
            type="text"
            variant="bordered"
            leftElement={<MagnifyingGlass />}
            placeholder="O que deseja buscar?"
          />
          <Button size="sm" variant="primary" className="rounded-[0_6px_6px_0]">
            Buscar
          </Button>
        </HStack>
        <Input
          className="w-full "
          type="date"
          variant="bordered"
          placeholder="Maio 12, 2023 - Maio13, 2023"
        />
      </HStack>

      <BigInfoCard
        convertedValue={resultsMocks.convertedValue}
        conversionRateFailure={resultsMocks.conversionRateFailure}
        conversionRateSend={resultsMocks.conversionRateSend}
      />

      <HStack className="gap-8">
        <InfoCard
          icon={<img src={ShoppingCart} alt="coin Icon" />}
          title="Total de Carrinhos Enviados"
          value={resultsMocks.totalCartsSent}
          percentage="+ 32%"
        />
        <InfoCard
          icon={<img src={ShoppingCart} alt="coin Icon" />}
          title="Total de Carrinhos Pagos"
          value={resultsMocks.totalCartsPaid}
          percentage="+ 32%"
        />
        <InfoCard
          icon={<img src={Ticket} alt="coin Icon" />}
          title="TME - Ticket médio carrinho enviado"
          value={resultsMocks.tme}
          percentage="+ 32%"
        />
        <InfoCard
          icon={<img src={ShoppingCart} alt="coin Icon" />}
          title="TMP - Ticket médio carrinho pago"
          value={resultsMocks.totalCartsSent}
          percentage="+ 32%"
        />
      </HStack>

      <HStack className="gap-8">
        <InfoCard
          icon={<img src={Headset} alt="coin Icon" />}
          title="Atendimentos"
          value={resultsMocks.Attendances}
          percentage="+ 32%"
        />
        <InfoCard
          icon={<img src={Check} alt="coin Icon" />}
          title="Finalizados"
          value={resultsMocks.Finalized}
          percentage="+ 32%"
        />
        <InfoCard
          icon={<img src={whatsapp} alt="coin Icon" />}
          title="Em Whatsapp"
          value={resultsMocks.whatsApp}
          percentage="+ 32%"
        />
        <InfoCard
          icon={<img src={Users} alt="coin Icon" />}
          title="Em Fila"
          value={resultsMocks.queue}
          percentage="+ 32%"
        />
      </HStack>

      <SellersTable />
    </VStack>
  )
}
