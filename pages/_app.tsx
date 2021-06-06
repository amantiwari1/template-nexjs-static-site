import Layout from 'components/Layout';
import GlobalStyles from 'styles/GlobalStyles';

const App = ({ Component, pageProps }) => (
  <>
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
