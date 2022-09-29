import FAQ from "../FAQ";
import Search from "../Search";
import Home from "../Home";
import HotMovie from "../HotMovie";
import Movies from "../Movies";
import NewMovie from "../NewMovie";
import SeriesMovie from "../SeriesMovie";
import Detail from "../Detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const publicRoutes = [
  { path: "/", component: Home },
  {
    path: "/Search",
    component: Search,
    namePage: "Search",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
  { path: "/HotMovie", component: HotMovie, namePage: "Hot Movie" },
  { path: "/Movies", component: Movies, namePage: "Movies" },
  { path: "/SeriesMovie", component: SeriesMovie, namePage: "Series Movie" },
  { path: "/NewMovie", component: NewMovie, namePage: "New Movie" },
  { path: "/FAQ", component: FAQ, namePage: "FAQ" },
  { path: "/Detail/:mediaType/:idMovie", component: Detail },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
