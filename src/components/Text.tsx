import React from 'react'

type TextProps = {
    children: React.ReactNode
};

function Title({ children }: TextProps) {
  return <h1>{children}</h1>
} 

function Heading({ children }: TextProps) {
  return <h2>{children}</h2>
} 

function Subheading({ children }: TextProps) {
  return <h3>{children}</h3>
} 

function Body({ children }: TextProps) {
  return <p>{children}</p>
}

function Caption({ children }: TextProps) {
  return <span>{children}</span>
} 

function Label({ children }: TextProps) {
  return <label>{children}</label>
} 

function InlineCode({ children }: TextProps) {
  return <code>{children}</code>
}

export const Text = {
  Title,
  Heading,
  Subheading,
  Body,
  Caption,
  Label,
  Code: InlineCode,
}
