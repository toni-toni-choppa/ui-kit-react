import type { ComponentProps } from 'react'

type CheckboxInputProps = Omit<ComponentProps<'input'>, 'type'>

export function CheckboxInput(props: CheckboxInputProps) {
  return <input type="checkbox" {...props} />
}
