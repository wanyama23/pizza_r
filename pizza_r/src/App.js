import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Restaurant from "./Restaurant";
import Home from "./Home";
import HeroPowerForm from "./HeroPowerForm";
import Pizza from "./Pizza";


function App() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/Restaurant_pizzas/new">
              <HeroPowerForm />
            </Route>
            <Route exact path="/Pizzas/:id/edit">
              <PowerEditForm />
            </Route>
            <Route exact path="/Pizzas/:id">
              <Pizza />
            </Route>
            <Route exact path="/Restaurants/:id">
              <Restaurant />
            </Route>
            <Route exact path="/">
              <Restaurant />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
  
  export default App;