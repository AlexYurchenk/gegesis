import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import ErrorView from "./components/ErrorView/ErrorView";
import TrendMovieView from "./views/TrendMovieView";
import { Route, Switch } from "react-router-dom";
import MovieView from "./views/MovieView";
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
            <h1>Я Фильмі </h1>
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
