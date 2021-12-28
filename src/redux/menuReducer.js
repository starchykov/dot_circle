const IS_ACTIVE = 'IS-ACTIVE';

// Define initial state data
const initialState = {
    isActive: false,
    headerItems: [
        {title: 'About', icon: 'bx bx-grid-alt', path: '/'},
        {title: 'Business trainings', icon: 'bx bx-task', path: '/trainings'},
        {title: 'Open programs', icon: 'bx bx-conversation', path: '/programs'},
        {title: 'Dream team', icon: 'bx bx-group', path: '/team'},
        {title: 'Consulting', icon: 'bx bx-user-voice', path: '/consulting'},
        {title: 'Webinars', icon: 'bx bx-microphone', path: '/webinars'},
        {title: 'Useful', icon: 'bx bx-book-bookmark', path: '/useful'},
        {title: 'Gallery', icon: 'bx bx-images', path: '/gallery/'},
    ]
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_ACTIVE:
            return {
                ...state,
                isActive: action.isActive
            };
        default:
            return state
    }
};

export let setActiveAC = (isActive) => {
    return {
        type: IS_ACTIVE,
        isActive
    }
};

export default menuReducer;