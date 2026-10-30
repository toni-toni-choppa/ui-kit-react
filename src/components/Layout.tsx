import type { ComponentProps } from 'react'
import '@/styles/layout.css'

function Main(props: ComponentProps<'main'>) {
  return <main className="main" {...props} />
}

function Header(props: ComponentProps<'header'>) {
  return <header className="header" {...props} />
}

function Footer(props: ComponentProps<'footer'>) {
  return <footer className="footer" {...props} />
}

function Nav(props: ComponentProps<'nav'>) {
  return <nav className="nav" {...props} />
}

function Aside(props: ComponentProps<'aside'>) {
  return <aside className="aside" {...props} />
}

function Section(props: ComponentProps<'section'>) {
  return <section className="section" {...props} />
}

function Container(props: ComponentProps<'div'>) {
  return <div className="container" {...props} />
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
