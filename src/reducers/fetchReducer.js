import {GET_FEEDS} from "../actions/types";

const initialState = {
   feeds:[]
}


export default function (state = initialState,action) {
    const {type,payload} = action;

    switch (type) {

        case GET_FEEDS:

            return{
                ...state,
                feeds: payload
            }
            
        default:
            return state;
    }

    
}