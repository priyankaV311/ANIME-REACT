// import { createContext, useContext } from "react";
import { createContext, useContext, useEffect, useReducer } from "react";


const GlobalContext =  createContext();

const baseUrl = "https://api.jikan.moe/v4";
// actions
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
// reducer
const reducer = (state, action) => {
    switch(action.type) {
        case LOADING: 
            return { ...state, loading: true }
        case GET_POPULAR_ANIME: 
            return { ...state, popularAnime: action.payload, loading: false };
        default: 
            return state;    
    }
};
export const GlobalContextProvider = ({ children }) => {
    // intial state
    const intialState = {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        isSearch: false,
        searchResults: [],
        loading: false 
    }
    const [ state, dispatch ] = useReducer(reducer, intialState);
    //fetch popular anime
    const getPopularAnime = async () => {
        dispatch({ type: LOADING });
        const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
        const data = await response.json();
        // console.log(data.data);
        dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
    } 
    useEffect(() => {
        getPopularAnime();
    }, [])
   return(
    <GlobalContext.Provider value={{ 
        ...state
    }}>
        {children}
    </GlobalContext.Provider>
)
};

export const useGlobalContext = () => {
return useContext(GlobalContext);
}