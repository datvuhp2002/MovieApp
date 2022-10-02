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
    path: "/Search",
    component: Search,
    namePage: "Search",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
  { path: "/HotMovie", component: HotMovie, namePage: "Hot Movie" },
  { path: "/Movies", component: Movies, namePage: "Movies" },
  { path: "/NewMovie", component: NewMovie, namePage: "New Movie" },
  { path: "/FAQ", component: FAQ, namePage: "FAQ" },
  { path: "/Detail/:mediaType/:idMovie", component: Detail },
  { path: "/genre/:type/:genre/:name", component: Genre },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
