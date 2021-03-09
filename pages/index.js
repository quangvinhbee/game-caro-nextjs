import Layout from '../components/Layout/Layout'
import Layout_Menu from '../components/Layout/Layout_Menu'

import IndexPage from '../containers/pages/IndexPage';

export default function index(props) {
  return (
    <>
      <Layout title="Xin chào!"></Layout>
      <Layout_Menu></Layout_Menu>
      <div className='body'>
        <IndexPage></IndexPage>
      </div >
    </>
  )
}
