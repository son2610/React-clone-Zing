// luu nhung bien thong tin cua app.
// vi du: mau sac, bien ...............

import  actionTypes from "../actions/actionType";


// cac state ban dau cua thang app
const initState = {
    homeData: [],
    test: 'Hello world'
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state;
    
        default:
            return state
    }
}

export default appReducer