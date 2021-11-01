import React, { useState } from 'react'
import { Add_list, Clear_All, Delete_list } from "../Action/index"
import { useDispatch, useSelector } from "react-redux"

const Todo_app = () => {
    const [input, setinput] = useState("")
    const container = useSelector(state => state.todo_Reducer.list)
    console.log(container);
    const dispatch = useDispatch()
    return (
        <div className="input-container">

            <div className="inner-div">

                <div className="main_inner">
                    <h1>ToDo List</h1>
                    <div className=" input_div">
                        <input type="text" class="form-control input shadow-none" value={input} onChange={(e) => setinput(e.target.value)} placeholder="Enter the input" aria-label="Username" aria-describedby="addon-wrapping"></input>
                        <span className="icon"><i class="fas fa-plus" onClick={() => dispatch(Add_list(input), setinput(""))}></i></span>
                    </div>
                    <div className="data_container">
                        {
                            container.map((elem) => {
                                return (
                                    <div className="list-container mt-2" key={elem.id}>
                                        <p className="paragraph">{elem.data}</p>
                                        <span className="Trash_icon"><i class="fas fa-trash" onClick={()=>dispatch(Delete_list(elem.id))}></i></span>
                                    </div>
                                )
                            })


                        }
                        <div className="clear_all-div">
                        {container.length ? <button type="button" class="btn btn-light shadow-none" onClick={()=>dispatch(Clear_All())}>Clear All</button>:""}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo_app
