import { Stack, VStack, Text } from 'now-ui'
import { FormatCurrency } from '../../utils/formatMoney'

type MetaCardProps = {
  currentGoal: number
  finalGoal: number
}

export const MetaCard = ({ currentGoal, finalGoal }: MetaCardProps) => {
  return (
    <VStack className="rounded-3xl bg-primary-25 p-5 w-full items-start shadow-2xl mt-5">
      <Text variant="paragraph1" className="font-medium">
        Meta em vendas
      </Text>
      <Text variant="paragraph5" className="text-slate-500">
        Atingido até o momento
      </Text>
      <Stack className="justify-between w-full mt-3 mb-1">
        <Text variant="paragraph5" className="text-slate-500 font-bold">
          {FormatCurrency(currentGoal)}
        </Text>
        <Text variant="paragraph5" className="text-slate-500 font-bold">
          {FormatCurrency(finalGoal)}
        </Text>
      </Stack>
      <Stack className="h-3 w-full bg-[#d9d9d9] justify-start rounded-xl">
        <Stack className="h-3 w-full bg-[#030508] justify-start rounded-xl" />
      </Stack>
    </VStack>
  )
}
