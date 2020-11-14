import { useEffect } from "react";
//Redux
import { useDispatch } from "react-redux";
import { loadGames } from "../action/gamesAction";

const Home = () => {
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
    console.log("hi");
  });

  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
