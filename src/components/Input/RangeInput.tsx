import type { ComponentProps } from 'react'

type RangeInputProps = Omit<ComponentProps<'input'>, 'type'>

export function RangeInput(props: RangeInputProps) {
  return <input type="range" {...props} />
}
