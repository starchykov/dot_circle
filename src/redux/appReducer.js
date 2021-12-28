const BG_IMAGE = 'BG-IMAGE';

// Define initial state data
const initialState = {
    bgImage: ''
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case BG_IMAGE:
            return {
                ...state,
                bgImage: action.image
            };
        default:
            return state
    }
};

export let setBackgroundAC = (image) => {
    return {
        type: BG_IMAGE,
        image: image
    }
};

export default appReducer;