// import { getPosts } from "../server/controllers/posts";
import { INIT_STATE } from "../../constant";
import { getType, getPosts } from "../actions";


export default function postsReducers(state = INIT_STATE.posts, action){
    switch(action.type){
        case getType(getPosts.getPostsRequest): // case getPostsRequest 
            return {
                ...state,
                isLoading: true,
            }
        case getType(getPosts.getPostsSuccess): // case getPostsSuccess 
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostsFailure): // case getPostsFailure 
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}