import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./action/gamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
    console.log("hi");
  });
  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
