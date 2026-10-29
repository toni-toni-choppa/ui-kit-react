import type { ComponentProps } from 'react'

type TextInputProps = {
  id: string;
} & Omit<ComponentProps<'input'>, 'type'>

export function TextInput({ id, ...props }: TextInputProps) {
  return <input className={"text-input"} id={id} type="text" {...props} />
}
