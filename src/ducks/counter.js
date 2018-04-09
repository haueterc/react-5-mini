// 1. Build the reducer
// 2. Build the store which takes the reducer
// 3. Pass index.js Provider and store

const inititialState = {
    currentValue: 0
}

// capitalized and spaces as underscores by convention
// stored in a constant to avoid mistyping error
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// this is an 'action' which is a descriptor of how to update the store
export function increment(num) {
    return {
        type: INCREMENT,
        payload: num
    }
}

export function decrement(num) {
    return {
        type: DECREMENT,
        payload: num
    }
}

// you can set a default value to avoid an undefined value;
// state would be initially undefined;
// afterwards state will be whatever gets passed in, not initialState.
export default function reducer(state = inititialState, action) {
    // switch is a cleaner if elseif
    switch (action.type) {
        case INCREMENT:
        // return object because initial state is an object
            return {
                currentValue: state.currentValue + action.payload
            }
        case DECREMENT: 
            return {
                currentValue: state.currentValue - action.payload
            }
        default:
            return state;
    }
}