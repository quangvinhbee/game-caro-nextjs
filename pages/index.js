import Layout from '../components/Layout/Layout'
import Layout_Menu from '../components/Layout/Layout_Menu'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Home(props) {
  return (
    <>
      <Layout title="Xin chào!"></Layout>
      <Layout_Menu></Layout_Menu>
      <div className='body'>
        <Container maxWidth="lg">

        </Container>
      </div >
    </>
  )
}
