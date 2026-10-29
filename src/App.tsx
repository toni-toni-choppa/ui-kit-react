import { CodeBlock, Divider, Input, Layout, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Text } from './components'
import Button from './components/Button'

function App() {
  return (
    <Layout.Main>
      <Layout.Header>
        <Text.Title>UI Kit</Text.Title>
        <Text.Body>Basic unstyled components.</Text.Body>
      </Layout.Header>

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

      <Text.Heading>Button</Text.Heading>

      <Button label="Click me" variant="primary"></Button>
      <Button label="Click me" variant="secondary"></Button>
      <Button label="Click me" variant="tertiary"></Button>

      <Divider />

      <Layout.Section>
        <Text.Heading>Input</Text.Heading>

        <Text.Subheading>Text</Text.Subheading>
        <Input.Text placeholder="Type here" />

        <Text.Subheading>Range</Text.Subheading>
        <Input.Range min={0} max={100} defaultValue={50} />

        <Text.Subheading>Select</Text.Subheading>
        <Input.Select defaultValue="b">
          <option value="a">Option A</option>
          <option value="b">Option B</option>
          <option value="c">Option C</option>
        </Input.Select>

        <Text.Subheading>Radio</Text.Subheading>
        <Text.Label>
          <Input.Radio name="radio-demo" value="one" defaultChecked /> One
        </Text.Label>
        <Text.Label>
          <Input.Radio name="radio-demo" value="two" /> Two
        </Text.Label>

        <Text.Subheading>Checkbox</Text.Subheading>
        <Text.Label>
          <Input.Checkbox defaultChecked /> Checked
        </Text.Label>
        <Text.Label>
          <Input.Checkbox /> Unchecked
        </Text.Label>
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
  )
}

export default App
