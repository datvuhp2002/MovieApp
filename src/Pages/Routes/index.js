import FAQ from "../FAQ";
import Search from "../Search";
import Home from "../Home";
import HotMovie from "../HotMovie";
import Movies from "../Movies";
import Detail from "../Detail";
import NewMovie from "../NewMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Genre from "../Genre";
const publicRoutes = [
  { path: "/MovieApp", component: Home },
  {
    path: "/MovieApp/Search",
    component: Search,
    namePage: "Search",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
  { path: "/MovieApp/HotMovie", component: HotMovie, namePage: "Hot Movie" },
  { path: "/MovieApp/Movies", component: Movies, namePage: "Movies" },
  { path: "/MovieApp/NewMovie", component: NewMovie, namePage: "New Movie" },
  { path: "/MovieApp/FAQ", component: FAQ, namePage: "FAQ" },
  { path: "/MovieApp/Detail/:mediaType/:idMovie", component: Detail },
  { path: "/MovieApp/genre/:type/:genre/:name", component: Genre },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
