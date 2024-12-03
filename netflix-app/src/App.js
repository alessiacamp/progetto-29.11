import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";
import MyCarousel from "./components/MyCarousel";

function App() {
  return (
    <div className="App bg-dark">
      <MyNav></MyNav>
      <MyMain></MyMain>
      <MyCarousel></MyCarousel>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
