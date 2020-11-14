import {GET_FEEDS} from "./types";

export const getFeeds = () => async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/posts/" ,
      );
  
      if (res.ok) {
        const feeds = await res.json();

        console.log(feeds,"action")

        dispatch({
          type: GET_FEEDS,
          payload: feeds
          
        });
      
   
      }
    } catch (error) {
      console.log(error);
    }
    
  };
  