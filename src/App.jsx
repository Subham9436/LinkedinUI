import "./App.css";
import { Card } from "./components/card";
import { Home } from "./components/home";

function App() {
  return<div>
    <Card children={<Home/>}></Card>
  </div>
}

export default App;
