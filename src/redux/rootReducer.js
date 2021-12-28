import {combineReducers} from "redux";
import menuReducer from "./menuReducer";
import galleryReducer from "./galleryReducer";
import usefulPageReducer from "./usefulPageReducer";
import trainingPageReducer from "./trainingPageReducer";
import programsReducer from "./programsReducer";


// Concat all application reducers and set them to Store
const rootReducer = combineReducers({
    menuReducer: menuReducer,
    galleryReducer: galleryReducer,
    usefulPageReducer: usefulPageReducer,
    trainingPageReducer: trainingPageReducer,
    programsReducer: programsReducer
});

export default rootReducer;