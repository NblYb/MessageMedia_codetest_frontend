import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header/>
        <Content
          style={{
            background: 'white',
            minHeight: document.documentElement.clientHeight - 128,
          }}
          align="center"
        >
          {ROUTES.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              exact
              component={route.page}
            />
          ))}
        </Content>
        <Footer style={{ height: 64, textAlign: 'center' }}>Message Media Coding Test - Zhan Gao</Footer>
      </Layout>
    </Router>
  );
}

export default App;
