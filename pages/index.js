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
          <Typography component="div" style={{ height: '100%', width: '100%' }}>
            conteonteonteoteonotenotoenotenotenotnontoenotoenotessssssssssssssssssssssdsadsadasdasdasdasdasdasdasdas
            conteonteonteoteonotenotoenotenotsenotnontoenotoenotessssssssssssssssssssssdsadsadasdasdasdasdasdasdasdas
            conteonteonteoteonotenotoenotenotenotnontoenotoenotessssssssssssssssssssssdsadsadasdasdasdasdasdasdasdas
            </Typography>
        </Container>
      </div >
    </>
  )
}
