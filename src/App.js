import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import ErrorView from "./components/ErrorView/ErrorView";
import TrendMovieView from "./views/TrendMovieView";
import { Route, Switch } from "react-router-dom";
import MovieView from "./views/MovieView";
import MovieSearch from "./views/MovieSearch";
function App() {
  return (
    <div>
      <Container>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <TrendMovieView />
          </Route>
          <Route path="/movies" exact>
            <MovieSearch />
          </Route>
          <Route path="/movies/:moviesId">
            <MovieView />
          </Route>
          <Route>
            <ErrorView />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
