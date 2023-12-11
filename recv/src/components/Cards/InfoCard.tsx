import { Stack, Text, VStack } from 'now-ui'
import { ReactElement } from 'react'
import { Card } from '../Cards'

type InfoCardProps = {
  title?: string
  icon?: ReactElement
  value?: number
  percentage?: string
}

export const InfoCard = ({ title, icon, value, percentage }: InfoCardProps) => {
  return (
    <Card>
      <VStack className="items-start p-[20px_26px_16px_26px] justify-start w-[312px]">
        <Text variant="paragraph5" className="text-slate-500">
          {title}
        </Text>
        <Stack>
          {icon && icon}
          <Text variant="headline3" className="font-medium text-slate-600">
            {`${value}`}
          </Text>
        </Stack>
        {percentage && (
          <Stack className="w-full justify-end h-fit">
            <Text variant="paragraph5" className="text-success-300">
              {`${percentage}`}
            </Text>
          </Stack>
        )}
      </VStack>
    </Card>
  )
}
