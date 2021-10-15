import { combineReducers } from "redux";
import buscador from "./buscadorReducer";
import game_shop from "./GameShopRedcuers";

const RootReducers = combineReducers({
    game_shop,
    buscador
})

export default RootReducers;