import './App.css';
import 'antd/dist/antd.css';
import { Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './routes';

function App() {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            exact
            component={route.page}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
