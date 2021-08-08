import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import { Route, Switch } from "react-router-dom";
import { withQuicklink } from "quicklink/dist/react/hoc.js";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { lazy, Suspense } from "react";
const TrendMovieView = lazy(() =>
  import("./views/TrendMovieView" /*webpackChunkName: "TrendMovieView"*/)
);
const ErrorView = lazy(() =>
  import("./components/ErrorView/ErrorView" /*webpackChunkName: "ErrorView"*/)
);
const MovieView = lazy(() =>
  import("./views/MovieView" /*webpackChunkName: "MovieView"*/)
);
const MovieSearch = lazy(() =>
  import("./views/MovieSearch" /*webpackChunkName: "MovieSearch"*/)
);
const options = {
  origins: [],
};
function App() {
  return (
    <div>
      <Container>
        <Navigation />
        <Suspense
          fallback={
            <Loader
              type="Puff"
              color="black"
              height={100}
              width={100}
              timeout={1000} //3 secs
            />
          }
        >
          <Switch>
            <Route
              path="/"
              component={withQuicklink(TrendMovieView, options)}
              exact
            ></Route>
            <Route
              path="/movies"
              component={withQuicklink(MovieSearch, options)}
              exact
            ></Route>
            <Route
              path="/movies/:moviesId"
              component={withQuicklink(MovieView, options)}
            ></Route>
            <Route>
              <ErrorView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
