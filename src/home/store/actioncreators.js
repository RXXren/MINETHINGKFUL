import * as constants from './constants';
import axios from 'axios';
import $ from "jquery";
export const  getList = ()=>{

    return (dispatch) =>{

        axios.get("http://192.168.10.81:8090/queryAllComposevideo").then((res)=>{
            const  data = res.data.data;
            dispatch(updateList(data));

        })
}

};
export const getVideoByNum = (num)=>{
    return (dispatch)=>{

        const  params ={
            num:num
        };
        var registerurl = "http://192.168.10.81:8090/querycomposevideo";

        $.post(registerurl, params, function (data) {
            if(data.code === 0){
               var  res = [];
               res.push(data.data);
                dispatch(updateList(res))
            }else{

            }
        });
    }
};
export  const  changeNumberValue =(num)=>({

    type :constants.Compation_Num,
    value:num

});
export const  updateStateOuter = (id)=>({

    type: constants.MouseState,
    selectID:id

});

export const  updtateStateOver = (id)=>({

    type:constants.MouseState,
    selectID: id

});
export const updateList = (data)=> ({

    type : constants.MovieList,
    list:  data

});