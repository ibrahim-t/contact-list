
const initialState={};
export function reducer(state=initialState,actions){

    switch(actions.type){
        case "INITIAL_LOAD":
            return{
			...state,
			data:actions.data
            }
        case "ROW_SELECTED":
            return{
                ...state,
                selectedData:actions.selectedData
                }
        case "ADD_ROW":
            return{
                ...state,
                data:{...state.data,Rows:[...state.data.Rows,actions.newData]}
                }
        default:
            return Object.keys(state).length==0?initialState:state;
    }
}