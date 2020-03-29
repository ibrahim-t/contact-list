
export function doTableInit(data){
    return{
        type:"INITIAL_LOAD",
        ...data
    }
}

export function doRowSelected(selectedData){
    return{
        type:"ROW_SELECTED",
        selectedData,
    }
}

export function doAddContact(newData){
    return{
        type:"ADD_ROW",
        newData,
    }
}