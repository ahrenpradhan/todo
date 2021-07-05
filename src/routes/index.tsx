import { Switch, Route } from "react-router-dom";
import Home from './home';
import Dashboard from './dashboard';

const Routes = () => (
  <div>
    <Switch>
      <Route path="/dashboard"><Dashboard /></Route>
      <Route path="/"><Home /></Route>
    </Switch>
  </div>
);

export default Routes;
