import { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../action/gamesAction";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//Style and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//Router
import { useLocation } from "react-router-dom";

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
    console.log("hi");
  }, [dispatch]);

  //Get data from state
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  console.log(newGames);
  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched[1] && (
          <>
            <h2>Upon Your Search</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  key={game.id}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </>
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              key={game.id}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              key={game.id}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              key={game.id}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  //auto fit columns in a row, minimun 500px, otherwise take as much as left
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
