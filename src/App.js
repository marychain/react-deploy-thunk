import './App.css';
import {Route, Switch } from 'react-router-dom';
import { appRoutes } from './routes/index';
import {Navigation} from './components/Navigation';  

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Navigation/>
      </header>
      <main className='content'>
        <Switch>
          { appRoutes.map(route => (
            <Route key={route.path} { ...route} />
          ))}
          <Route path='*'>
            <p>404: Page not found</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
