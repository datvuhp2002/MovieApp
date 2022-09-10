// layout
import FAQ from "../FAQ";
import Search from "../Search";
import Home from "../Home";
import HotMovie from "../HotMovie";
import Movies from "../Movies";
import NewMovie from "../NewMovie";
import SeriesMovie from "../SeriesMovie";
import Login from "../Login";
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
  { path: "/Login", component: Login },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
