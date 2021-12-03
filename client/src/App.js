import Home from "./app/pages/Home";
import Search from "./app/pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./app/shared/Header";
import FavoriteProduct from "./app/pages/FavoriteProduct";
import Cart from "./app/pages/Cart";
import { store } from './store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/FavoriteProduct" component={FavoriteProduct} />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
    </Router>
    </Provider>
  );
}
export default App;
