import { GET_DATA_WEATHER } from "../createTypes";

const initialState = {
  dataWeather: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_WEATHER:
      return { ...state, dataWeather: action.payload };
    default:
      return state;
  }
};
export default reducer;
