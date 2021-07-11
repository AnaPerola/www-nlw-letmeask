import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Room } from "./pages/Room";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AdminRoom } from './pages/AdminRoom';

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
