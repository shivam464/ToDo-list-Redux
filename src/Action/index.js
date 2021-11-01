export const Add_list=(data)=>{
    return{
        type:"ADD_DATA",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const Delete_list=(id)=>{
    return{
        type:'DELETE_LIST',
        id
    }
}
export const Clear_All=()=>{
    return {
        type:"CLEAR_ALL_List"
    }
}