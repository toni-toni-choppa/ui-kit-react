import type { ComponentProps } from 'react'

type SelectInputProps = ComponentProps<'select'>

export function SelectInput(props: SelectInputProps) {
  return <select className={"select-input"} {...props} />
}
