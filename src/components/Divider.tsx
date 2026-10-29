import type { ComponentProps } from 'react'
import '@/styles/components/divider.css'

export function Divider(props: ComponentProps<'hr'>) {
  return <hr className="divider" {...props} />
}
