import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import logger from "./logger";
import storage from "./storage";

export default applyMiddleware(
    thunk,
    storage,
    logger
);
