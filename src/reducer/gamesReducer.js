const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

// EXPLAINATION
//Action
// {
//   type: "FETCH_GAMES";
// }
//Action Creator
// const fetchGame = (userData) => {
//   return {
//     type: "FETCH_GAMES",
//     payload: userData,
//   };
// };
//Dispatch
// dispatch.fetchGame();

//Thunk
// allows us to do asyncronous

export default gamesReducer;
