import Layout from '../../components/Layout'
import Form from './components/Form'
import FormProvider from './context/FormProvider'

const Home = () => {
  return (
    <FormProvider>
      <Layout>
        <Form />
      </Layout>
    </FormProvider>
  )
}

export default Home
