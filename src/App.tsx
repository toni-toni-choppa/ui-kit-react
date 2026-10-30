import { CodeBlock, Divider, Input, Layout, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Text } from './components'
import Button from './components/Button'
import '@/styles/layout.css'

function App() {
  return (
    <Layout.Container>
      <Layout.Aside>
        <Input.Text placeholder="Search..." id="aside-text-input" />
      </Layout.Aside>

      <Layout.Content>
        <Layout.Header>
          <Button label="Sidebar" variant="tertiary" size="small" onClick={() => {
            const aside = document.querySelector('.aside');
            if (aside) {
              aside.classList.toggle('hidden');
            }
          }} />
        </Layout.Header>

        <Layout.Main>
          
          <Layout.Section>
            <Text.Title>UI Kit</Text.Title>
            <Text.Body>Basic unstyled components.</Text.Body>
          </Layout.Section>

          <Divider />

          <Layout.Section>
            <Text.Heading>Text</Text.Heading>
            <Text.Display>Display</Text.Display>
            <Text.Title>Title</Text.Title>
            <Text.Heading>Heading</Text.Heading>
            <Text.Subheading>Subheading</Text.Subheading>
            <Text.Body>Body</Text.Body>
            <Text.Caption>Caption</Text.Caption>
            <Text.Code>Inline code</Text.Code>
          </Layout.Section>

          <Divider />

          <Layout.Section>
            <Text.Heading>Button</Text.Heading>

            <Button label="Click me" variant="primary"></Button>
            <Button label="Click me" variant="secondary"></Button>
            <Button label="Click me" variant="tertiary"></Button>
          </Layout.Section>

          <Divider />

          <Layout.Section>
            <Text.Heading>Input</Text.Heading>

            <Text.Subheading>Text</Text.Subheading>
            <Input.Text placeholder="Type here" id="text-input" />

            <Text.Subheading>Select</Text.Subheading>
            <Input.Select defaultValue="b">
              <option value="a">Option A</option>
              <option value="b">Option B</option>
              <option value="c">Option C</option>
            </Input.Select>
          </Layout.Section>

          <Divider />

          <Layout.Section>
            <Text.Heading>Table</Text.Heading>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Type</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Text</TableCell>
                  <TableCell>Component</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Input</TableCell>
                  <TableCell>Namespace</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Layout.Section>

          <Divider />

          <Layout.Section>
            <Text.Heading>Code Block</Text.Heading>
            <CodeBlock>{`function greet(name: string) {\n  return \`Hello, \${name}!\`\n}`}</CodeBlock>
          </Layout.Section>

          <Divider />

          <Layout.Footer>
            <Text.Caption>End of demo</Text.Caption>
          </Layout.Footer>
        </Layout.Main>
      </Layout.Content>
    </Layout.Container>
  )
}

export default App
