import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Room } from "./pages/Room/Index";
import { Home } from "./pages/Home/Index";
import { NewRoom } from "./pages/NewRoom/Index";
import { AdminRoom } from './pages/AdminRoom/Index';

import { AuthContexts } from './contexts/AuthContexts';

function App() {
  return (
    <BrowserRouter>
      <AuthContexts>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContexts>
    </BrowserRouter>
  );
}

export default App;
