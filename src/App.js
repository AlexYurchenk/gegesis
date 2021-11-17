import Navigation from "./components/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import { withQuicklink } from "quicklink/dist/react/hoc.js";
import Container from "@mui/material/Container";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { lazy, Suspense } from "react";

const TrendMovieView = lazy(() =>
  import("./views/Trends" /*webpackChunkName: "TrendMovieView"*/)
);
const NotFoundView = lazy(() =>
  import("./components/ErrorView/ErrorView" /*webpackChunkName: "ErrorView"*/)
);
const PortfolioView = lazy(() =>
  import("./views/PortfolioView" /*webpackChunkName: "MovieView"*/)
);
// const MovieSearch = lazy(() =>
//   import("./views/MovieSearch" /*webpackChunkName: "MovieSearch"*/)
// );
const options = {
  origins: [],
};
function App() {
  return (
    <div>
      <Container maxWidth="md">
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
              path={"/porofile/:profileId"}
              component={withQuicklink(PortfolioView, options)}
            ></Route>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
