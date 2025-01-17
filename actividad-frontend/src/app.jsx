import { Header } from "./components/header";
import { Placeholder } from "./components/placeholder";
import { Summary } from "./components/summary";
import { Ranking } from "./components/ranking";

import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="summary">
          {/* TODO: Exercise 2 - Create the summary component */}
          <Summary />
        </div>
        <div className="ranking">
          <Ranking />
        </div>
      </div>
    </div>
  )
}

export default App;
