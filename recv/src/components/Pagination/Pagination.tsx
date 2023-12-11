import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { Button, HStack, Text } from 'now-ui'

export const Pagination = () => {
  return (
    <HStack className="justify-end w-full mt-10">
      {/* <HStack className="gap-3">
      <ArrowLeft color="#5E718D" cursor={'pointer'} />
      <Text className="text-slate-700" variant="paragraph4">
        Pagina 1 de 10
      </Text>
      <ArrowRight color="#5E718D" cursor={'pointer'} />
    </HStack> */}
      <HStack className="gap-3">
        <Button variant="secondary" className="text-slate-700">
          <ArrowLeft />
          Anterior
        </Button>
        <Text variant="paragraph4" className="text-slate-700">
          1 de 10
        </Text>
        <Button variant="secondary" className="text-slate-700">
          <ArrowRight />
          Próxima
        </Button>
      </HStack>
    </HStack>
  )
}
