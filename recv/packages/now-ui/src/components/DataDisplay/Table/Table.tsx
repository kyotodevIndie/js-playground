import React from 'react'
import { cn } from '../../../utils/cn'

type TableProps = React.TableHTMLAttributes<HTMLTableElement>
type TheadProps = React.TableHTMLAttributes<HTMLTableSectionElement>
type TbodyProps = React.TableHTMLAttributes<HTMLTableSectionElement>
type TdProps = React.TdHTMLAttributes<HTMLTableCellElement>
type TrProps = React.TdHTMLAttributes<HTMLTableRowElement>
type ThProps = React.ThHTMLAttributes<HTMLTableCellElement>

const Table = ({ className, ...props }: TableProps) => {
  return (
    <table className={cn('w-full border-collapse', className)} {...props} />
  )
}

const Thead = ({ className, ...props }: TheadProps) => {
  return <thead className={cn('bg-slate-25', className)} {...props} />
}

const Tbody = ({ className, ...props }: TbodyProps) => {
  return <tbody className={cn(className)} {...props} />
}

const Tr = ({ className, ...props }: TrProps) => {
  return <tr className={cn(className)} {...props} />
}

const Th = ({ className, ...props }: ThProps) => {
  return (
    <th
      className={cn(
        'text-slate-400 font-medium leading-5 tracking-[-0.2px] text-start px-5 py-4 border-none',
        className,
      )}
      {...props}
    />
  )
}

const Td = ({ className, ...props }: TdProps) => {
  return (
    <td
      className={cn(
        'p-4 bg-base-00 border-b border-solid border-b-slate-100 ',
        className,
      )}
      {...props}
    />
  )
}

Table.displayName = 'Table'
Thead.displayName = 'Thead'
Tbody.displayName = 'Tbody'
Tr.displayName = 'Tr'
Th.displayName = 'Th'
Td.displayName = 'Td'

export { Table, Thead, Tbody, Tr, Th, Td }
