const initial_data = {
    list: []
}
const todo_Reducer = (state = initial_data, action) => {
    switch (action.type) {
        case "ADD_DATA":
            const { id, data } = action.payload
            if (data.length > 3) {
                return {
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id: id,
                            data: data
                        }
                    ]

                }
            }
        case "DELETE_LIST":

            const new_data = state.list.filter((data) => data.id !== action.id)

            return {
                ...state,
                list: new_data
            }
        case "CLEAR_ALL_List":

            return {
                ...state,
                list: []
            }
        default: return state
    }
}

export default todo_Reducer;