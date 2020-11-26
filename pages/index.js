
import Container from 'react-bootstrap/Container'
import Layout from '../components/includes/Layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { fetchData } from '../utils/firebase'

export default function Home() {
  var show = true
  const arrr = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ));

  return (
    <>
      {arrr}
      <Layout title="Xin chào!"></Layout>
      <Container fluid="md">
        <Row>
          <Col>Main 1</Col>
          <Col xs={4}>Main 2</Col>
        </Row>
      </Container>
    </>
  )
}
