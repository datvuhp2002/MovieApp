import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Pages/Routes";
function App() {
  return (
    <Router basename="/MovieApp" forceRefresh={true}>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
