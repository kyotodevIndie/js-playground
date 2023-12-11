import { Stack, cn } from 'now-ui'

export const Card = ({ children, className, ...props }: any) => {
  return (
    <Stack
      className={cn(
        'rounded-xl bg-base-00 border border-solid border-slate-200 shadow-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </Stack>
  )
}
