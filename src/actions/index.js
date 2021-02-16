export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY="CLEAR_DISPLAY";
export const MEMORIZE_TOTAL="MEMORIZE_TOTAL";
export const MEMORY_RECALL="MEMORY_RECALL";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (input) => {
    return({type:APPLY_NUMBER, payload: input});
}

export const changeOperation =(op)=>{
    return ({ type: CHANGE_OPERATION, payload: op })
}
export const clearDisplay=()=>{
    return ({ type: CLEAR_DISPLAY})
}
export const memorizeTotal=()=>{
    return ({ type: MEMORIZE_TOTAL })
}
export const memoryRecall=()=>{
    return ({ type: MEMORY_RECALL })
}