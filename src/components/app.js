import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import MovieDetails from "pages/movie/details";
import MovieEpisodes from "pages/movie/episode";
import Search from "pages/search";
import { MoviesProvider } from "context/movies";
import { WatchListProvider } from "context/watchlist";
import Discover from "pages/discover";
import Navbar from "components/navbar";

export default function App() {
  return (
    <>
      <MoviesProvider>
        <WatchListProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/movie/:id/details" component={MovieDetails} />
              <Route path="/movie/:id/episodes" component={MovieEpisodes} />
              <Route path="/search" component={Search} />
              <Route path="/discover" component={Discover} />
              <Route path="/" component={Home} excat />
            </Switch>
          </BrowserRouter>
        </WatchListProvider>
      </MoviesProvider>
    </>
  );
}
