import type { ComponentProps } from 'react'
import '@/styles/components/table.css'

export function Table(props: ComponentProps<'table'>) {
  return <table className={"table"} {...props} />
}

export function TableHead(props: ComponentProps<'thead'>) {
  return <thead className={"table-header"} {...props} />
}

export function TableBody(props: ComponentProps<'tbody'>) {
  return <tbody className={"table-body"} {...props} />
}

export function TableRow(props: ComponentProps<'tr'>) {
  return <tr className={"table-row"} {...props} />
}

export function TableHeader(props: ComponentProps<'th'>) {
  return <th className={"table-head"} {...props} />
}

export function TableCell(props: ComponentProps<'td'>) {
  return <td className={"table-cell"} {...props} />
}
