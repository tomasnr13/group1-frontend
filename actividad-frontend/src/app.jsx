import { Header } from "./components/header";
import { Placeholder } from "./components/placeholder";
import "./app.css";
import { Summary } from "./components/summary";


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
          {/* TODO: Exercise 3 - Create the ranking component */}
          <Placeholder />
        </div>
      </div>
    </div>
  )
}

export default App;
