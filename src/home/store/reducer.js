
import * as constans from './constants';
const  defaultState = {

    resList : [],
    compationName:'重庆马拉松',
    compationNum :"",
    selectID :""
};

export default(state = defaultState,action)=>{
    
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {

            case constans.MovieList:

            const newList =[];
            action.list.map((item)=>{
                var movie = {
                    id : item.Id.toString(),
                    videoName:item.VideoName,
                    resSrc:item.VideoUrl,
                    num :item.UserNum
                }
                newList.push(movie);
            })
            newState.resList = newList;
            return newState;

            case constans.MouseState:
            newState.selectID = action.selectID;
            return newState;

        case constans.Compation_Num:
            newState.compationNum = action.value
            return newState;
        default:
            return state;
    }

}