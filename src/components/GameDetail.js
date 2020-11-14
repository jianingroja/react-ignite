//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//
import { smallImage } from "../util";
//images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
      //take me back to the homepage when i click on the shadow
    }
  };

  //Get Platform IAMGE
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Pc":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <PlatForms>
                  {game.platforms.map((data) => (
                    <img
                      src={getPlatform(data.platform.name)}
                      key={data.platform.id}
                    />
                  ))}
                </PlatForms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 640)}
                alt=""
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.map((shot) => (
                <img src={smallImage(shot.image, 1280)} key={shot.id} alt="" />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rosybrown;
  }
  &::-webkit-scrollbar-track {
    background: grey;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 2rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: balck;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const PlatForms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 1rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 3rem;
  img {
    width: 100%;
    /* height: 60vh;
    object-fit: cover; */
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0rem;
`;

export default GameDetail;
