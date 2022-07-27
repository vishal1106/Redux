let initialstate={
    count:0,
}


export const  reducer=(state=initialstate,action)=>{

    switch(action.type){
 case "INCREMENT":{
     state.count++;
     return {...state};
 }
 case "DECREMENT":{
     state.count--;
     return {...state};
 }

 default : {
return state;
 }
    }



   
}