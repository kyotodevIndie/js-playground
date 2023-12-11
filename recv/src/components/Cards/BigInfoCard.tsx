import { Card } from '.'
import { Stack, VStack, Text, Image } from 'now-ui'
import { FormatCurrency } from '../../utils/formatMoney'
import CoinIcon from '../../assets/icons/coinIcon.svg'
import FinanceArrows from '../../assets/icons/financeArrows.svg'

type BigInfoCardProps = {
  convertedValue: number
  conversionRateFailure: number
  conversionRateSend: number
}

export const BigInfoCard = ({
  convertedValue,
  conversionRateFailure,
  conversionRateSend,
}: BigInfoCardProps) => {
  return (
    <Card>
      <Stack>
        <VStack className="items-start justify-start p-[20px_60px_16px_60px]">
          <Text variant="paragraph5" className="text-slate-500">
            Valor convertido
          </Text>
          <Stack>
            <Image src={CoinIcon} alt="coin Icon" />
            <Text variant="headline3" className="font-medium text-slate-600">
              {FormatCurrency(convertedValue)}
            </Text>
          </Stack>
          <Stack className="w-full justify-end">
            <Text variant="paragraph5" className="text-success-300">
              + 32%
            </Text>
          </Stack>
        </VStack>

        <Stack className="w-[1px] h-36 bg-slate-100 mx-8" />

        <VStack className="items-start justify-start p-[20px_60px_16px_30px">
          <Text variant="paragraph5" className="text-slate-500">
            Taxa de Conversão - Pagos/Total de Falhas
          </Text>
          <Stack>
            <Image src={FinanceArrows} alt="coin Icon" />
            <Text variant="headline3" className="font-medium text-slate-600">
              {`${conversionRateFailure}`}
            </Text>
          </Stack>
          <Stack className="w-full justify-end">
            <Text variant="paragraph5" className="text-success-300">
              + 32%
            </Text>
          </Stack>
        </VStack>

        <Stack className="w-[1px] h-36 bg-slate-100 mx-8" />

        <VStack className="items-start justify-start p-[20px_60px_16px_30px">
          <Text variant="paragraph5" className="text-slate-500">
            Taxa de Conversão - Pagos/Enviados
          </Text>
          <Stack>
            <img src={FinanceArrows} alt="coin Icon" />
            <Text variant="headline3" className="text-slate-600 font-medium">
              {`${conversionRateSend}`}
            </Text>
          </Stack>
          <Stack className="w-full justify-end">
            <Text variant="paragraph5" className="text-success-300">
              + 32%
            </Text>
          </Stack>
        </VStack>
      </Stack>
    </Card>
  )
}
