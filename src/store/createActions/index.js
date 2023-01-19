import { GET_DATA_WEATHER } from "../createTypes";

export function getDataCurrnet(payload) {
  return { type: GET_DATA_WEATHER, payload };
}
