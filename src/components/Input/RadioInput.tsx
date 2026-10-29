import type { ComponentProps } from 'react'

type RadioInputProps = Omit<ComponentProps<'input'>, 'type'>

export function RadioInput(props: RadioInputProps) {
  return <input type="radio" {...props} />
}
