import {selectTasks} from "../store/tasksSlice.jsx";
import {useSelector} from "react-redux";

export function Footer() {
    const tasks = useSelector(selectTasks);
    return (
        <div className="flex justify-center py-3 mt-auto">
            <p className='text-3xl text-black'>Total tasks: {tasks.length}</p>
        </div>
    )
}