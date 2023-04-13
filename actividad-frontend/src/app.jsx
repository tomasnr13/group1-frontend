import { Header } from "./components/header";
import { Placeholder } from "./components/placeholder";
import { Ranking } from "./components/ranking";
// import { FilterSelector } from "./components/selector";

import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="summary">
          {/* TODO: Exercise 2 - Create the summary component */}
          <Placeholder />
        </div>
        <div className="ranking">
          {/* <FilterSelector /> */}
          <Ranking />
        </div>
      </div>
    </div>
  )
}

export default App;
