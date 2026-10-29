import type { ComponentProps } from 'react'

function Main(props: ComponentProps<'main'>) {
  return <main {...props} />
}

function Header(props: ComponentProps<'header'>) {
  return <header {...props} />
}

function Footer(props: ComponentProps<'footer'>) {
  return <footer {...props} />
}

function Nav(props: ComponentProps<'nav'>) {
  return <nav {...props} />
}

function Aside(props: ComponentProps<'aside'>) {
  return <aside {...props} />
}

function Section(props: ComponentProps<'section'>) {
  return <section {...props} />
}

function Container(props: ComponentProps<'div'>) {
  return <div {...props} />
}

export const Layout = {
  Main,
  Header,
  Footer,
  Nav,
  Aside,
  Section,
  Container,
}
